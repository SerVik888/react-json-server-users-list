import React from 'react'
import { useInput } from '../../hooks/useInput'
import s from './loginPage.module.css'

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
    <div className={s.loginPage}>
      <h1 className={s.h1}>Авторизация</h1>
      <form className={s.loginForm} onSubmit={handleSubmit}>
        {email.isDirty && email.error && <div className={s.error}>{email.error}</div>}
        <input
          className={s.input}
          placeholder={'имейл'}
          onBlur={email.onBlur}
          onChange={email.onChange}
          value={email.value}
          type='email'
        />
        {password.isDirty && password.error && <div className={s.error}>{password.error}</div>}
        <input
          className={s.input}
          placeholder='пароль'
          onBlur={password.onBlur}
          onChange={password.onChange}
          value={password.value}
          type='password'
        />
        <button className={s.btn} disabled={!email.inputValid || !password.inputValid} type='submit'>
          Авторизоваться
        </button>
      </form>
    </div>
  )
}
