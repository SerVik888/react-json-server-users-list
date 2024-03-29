import React, { memo } from 'react'
import s from './homePage.module.css'
import { useInput } from '../../hooks/useInput'

export const Search = memo(({ usersFilter, dataLength }) => {
  const search = useInput('')

  const searchHandleChange = () => {
    usersFilter(search.value.trim())
    search.setValue('')
  }

  return (
    <div>
      <input
        className={s.input}
        placeholder='поиск'
        value={search.value}
        name='searchValue'
        onChange={search.onChange}
        onBlur={search.onBlur}
      />
      <button className={s.btn} onClick={searchHandleChange}>
        Поиск
      </button>
      {search.isDirty && !dataLength && <h2>Ничего не найдено!!!</h2>}
    </div>
  )
})
