import React from 'react'
import { useInput } from '../../hooks/useInput'

export const LoginPage = ({ loginUser }) => {
  const email = useInput('', { isEmpty: '', minLength: 10, maxLength: 20, isEmail: '' })
  const password = useInput('', { isEmpty: '', minLength: 4, maxLength: 10 })

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser({ email: email.value, password: password.value })
    email.setValue('')
    password.setValue('')
  }

  return (
    <div>
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit}>
        {email.isDirty && email.error && <div>{email.error}</div>}
        <input placeholder='имейл' onBlur={email.onBlur} onChange={email.onChange} value={email.value} type='email' />
        {password.isDirty && password.error && <div>{password.error}</div>}
        <input
          placeholder='пароль'
          onBlur={password.onBlur}
          onChange={password.onChange}
          value={password.value}
          type='password'
        />
        <button disabled={!email.inputValid || !password.inputValid} type='submit'>
          Авторизоваться
        </button>
      </form>
    </div>
  )
}
