import React, { memo, useEffect, useState } from 'react'
import s from './homePage.module.css'
import { useInput } from '../../hooks/useInput'

export const UsersList = memo(({ data, deleteUser, updateUser, setData }) => {
  const name = useInput('', { minLength: 3, maxLength: 10 })
  const tel = useInput('', { minLength: 3, maxLength: 10 })
  const [userInput, showUserInput] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    setData()
  }, [])

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
  const handleClickDelete = (userId) => {
    deleteUser(userId)
  }

  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>
            <span>Имя</span>
          </th>
          <th>
            <span>Телефон</span>
          </th>
          <th>
            <span>Изменить</span>
          </th>
          <th>
            <span>Удалить</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.id}>
            {userInput && user.id === currentUser ? (
              <>
                <td>
                  {name.isDirty && name.error && <span className={s.error}>{name.error}</span>}
                  <input
                    autoFocus
                    placeholder='Имя'
                    value={name.value}
                    name='name'
                    onChange={name.onChange}
                    onBlur={name.onBlur}
                  />
                </td>
                <td>
                  {name.isDirty && tel.error && <span className={s.error}>{tel.error}</span>}
                  <input
                    placeholder='Телефон'
                    value={tel.value}
                    name='tel'
                    onChange={tel.onChange}
                    onBlur={tel.onBlur}
                  />
                </td>
                <td>
                  <button disabled={!name.inputValid || !tel.inputValid} onClick={() => handleClickUpdate(user)}>
                    Изменить данные
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>
                  <span>{user.name}</span>
                </td>
                <td>
                  <span>{user.tel}</span>
                </td>
                <td>
                  <button onClick={() => handleClickChange(user)}>Изменить</button>
                </td>
              </>
            )}
            <td>
              <button onClick={() => handleClickDelete(user.id)}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
})
