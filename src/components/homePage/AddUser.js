import React, { useState } from 'react'
import s from './homePage.module.css'
import { useInput } from '../../hooks/useInput'

export const AddUser = ({ addUser }) => {
  const name = useInput('', { minLength: 3, maxLength: 10 })
  const tel = useInput('', { minLength: 3, maxLength: 10 })
  const [showInput, setShowInput] = useState(false)

  const handleClick = () => {
    addUser({
      id: Date.now().toString(),
      name: name.value,
      tel: tel.value,
    })
    name.setValue('')
    tel.setValue('')
    setShowInput(false)
  }

  return (
    <div>
      {showInput ? (
        <div>
          {name.isDirty && (name.error || tel.error) && <div className={s.error}>{name.error || tel.error}</div>}
          <input
            className={s.input}
            autoFocus
            placeholder='имя'
            value={name.value}
            name='name'
            onChange={name.onChange}
            onBlur={name.onBlur}
          />{' '}
          <input
            className={s.input}
            placeholder='телефон'
            value={tel.value}
            name='tel'
            onChange={tel.onChange}
            onBlur={tel.onBlur}
          />{' '}
          <button className={s.btn} disabled={!name.inputValid || !tel.inputValid} onClick={handleClick}>
            Отправить
          </button>
        </div>
      ) : (
        <button className={s.btn} onClick={setShowInput}>
          Добавить пользователя
        </button>
      )}
    </div>
  )
}
