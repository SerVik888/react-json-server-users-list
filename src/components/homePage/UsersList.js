import React, { useState } from 'react'
import { useInput } from '../../hooks/useInput'

export const UsersList = ({ data, deleteUser, updateUser }) => {
  const name = useInput('', { minLength: 3, maxLength: 10 })
  const tel = useInput('', { minLength: 3, maxLength: 10 })
  const [userInput, showUserInput] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  const handleClickUpdate = (user) => {
    updateUser({ id: user.id, name: name.value || user.name, tel: tel.value || user.tel })
    showUserInput(false)
    name.setValue('')
    tel.setValue('')
  }
  const handleClickChange = (user) => {
    setCurrentUser(user.id)
    showUserInput(true)
    name.setValue(user.name)
    tel.setValue(user.tel)
  }
  const handleClickDelete = (user) => {
    deleteUser(user.id)
    console.log(user)
  }

  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          {userInput && user.id === currentUser ? (
            <>
              {name.isDirty && (name.error || tel.error) && <div>{name.error || tel.error}</div>}
              <input
                placeholder='Имя'
                value={name.value}
                name='name'
                onChange={name.onChange}
                onBlur={name.onBlur}
              />{' '}
              <input placeholder='Телефон' value={tel.value} name='tel' onChange={tel.onChange} onBlur={tel.onBlur} />{' '}
              <button disabled={!name.inputValid || !tel.inputValid} onClick={() => handleClickUpdate(user)}>
                Изменить данные
              </button>
            </>
          ) : (
            <>
              {user.name} {user.tel}
              <button onClick={() => handleClickChange(user)}>Изменить</button>
            </>
          )}{' '}
          <button onClick={() => handleClickDelete(user)}>Удалить</button>
        </div>
      ))}
    </div>
  )
}
