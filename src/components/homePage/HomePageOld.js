import React, { useCallback, useEffect, useState } from 'react'

export const HomePage = ({ data, setData, addUser, deleteUser, updateUser, usersFilter, searchInputValue }) => {
  const [inputValues, setInputValues] = useState({
    name: '',
    tel: '',
  })
  const [input, showInput] = useState(false)
  const [userInput, showUserInput] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    setData()
  }, [])

  const searchHandleChange = (e) => {
    usersFilter(e.target.value.trim())
    console.log(e.target.value)
  }

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setInputValues({ ...inputValues, [name]: value })
    console.log(name, value)
  })
  return (
    <div>
      <h1>Домашняя страница</h1>f
      <input placeholder='поиск' value={searchInputValue} name='searchValue' onChange={searchHandleChange} />
      {data.map((user) => (
        <div key={user.id}>
          {userInput && user.id === currentUser ? (
            <>
              <input placeholder='name' defaultValue={user.name} name='name' onChange={handleChange} />{' '}
              <input placeholder='tel' defaultValue={user.tel} name='tel' onChange={handleChange} />{' '}
              <button
                onClick={() => {
                  updateUser({ id: user.id, name: inputValues.name || user.name, tel: inputValues.tel || user.tel })

                  showUserInput(false)
                  setInputValues({ name: '', tel: '' })
                }}
              >
                Изменить данные
              </button>
            </>
          ) : (
            <>
              {user.name} {user.tel}
              <button
                onClick={() => {
                  setCurrentUser(user.id)
                  showUserInput(true)
                }}
              >
                Изменить
              </button>
            </>
          )}{' '}
          <button
            onClick={() => {
              deleteUser(user.id)
            }}
          >
            Удалить
          </button>
        </div>
      ))}
      {input ? (
        <div>
          <input placeholder='name' value={inputValues.name} name='name' onChange={handleChange} />{' '}
          <input placeholder='tel' value={inputValues.tel} name='tel' onChange={handleChange} />{' '}
          <button
            onClick={() => {
              addUser({ name: inputValues.name, tel: inputValues.tel })
              setInputValues({ name: '', tel: '' })
              showInput(false)
            }}
          >
            Отправить
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            showInput(true)
          }}
        >
          Добавить пользователя
        </button>
      )}
    </div>
  )
}
