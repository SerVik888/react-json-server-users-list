import React from 'react'
import s from './homePage.module.css'
import { AddUser } from './AddUser'
import { Search } from './Search'
import { UsersList } from './UsersList'

export const HomePage = ({ data, setData, addUser, deleteUser, updateUser, usersFilter, loading }) => {
  if (loading && !data.length) {
    return <h1>Подождите идёт загрузка...</h1>
  }

  return (
    <div>
      <h1 className={s.h1}>Домашняя страница</h1>
      <Search usersFilter={usersFilter} dataLength={data.length} />
      <UsersList data={data} deleteUser={deleteUser} updateUser={updateUser} setData={setData} />
      <AddUser addUser={addUser} />
    </div>
  )
}
