import React from 'react'
import { useInput } from '../../hooks/useInput'

export const Search = ({ usersFilter, dataLength }) => {
  const search = useInput('')
  console.log(search.value)

  const searchHandleChange = () => {
    usersFilter(search.value.trim())
    search.setValue('')
  }

  return (
    <div>
      <input
        placeholder='поиск'
        value={search.value}
        name='searchValue'
        onChange={search.onChange}
        onBlur={search.onBlur}
      />
      <button onClick={searchHandleChange}>Поиск</button>
      {search.isDirty && !dataLength && <h2>Ничего не найдено!!!</h2>}
    </div>
  )
}
