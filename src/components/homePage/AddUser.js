import React, { useCallback, useState } from 'react'
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
          {name.isDirty && (name.error || tel.error) && <div>{name.error || tel.error}</div>}
          <input placeholder='имя' value={name.value} name='name' onChange={name.onChange} onBlur={name.onBlur} />{' '}
          <input placeholder='телефон' value={tel.value} name='tel' onChange={tel.onChange} onBlur={tel.onBlur} />{' '}
          <button disabled={!name.inputValid || !tel.inputValid} onClick={handleClick}>
            Отправить
          </button>
        </div>
      ) : (
        <button onClick={setShowInput}>Добавить пользователя</button>
      )}
    </div>
  )
}
