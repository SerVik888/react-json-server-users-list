import React, { useEffect } from 'react'
import { AddUser } from './AddUser'
import { Search } from './Search'
import { UsersList } from './UsersList'

export const HomePage = ({ data, setData, addUser, deleteUser, updateUser, usersFilter }) => {
  useEffect(() => {
    setData()
  }, [])

  return (
    <div>
      <h1>Домашняя страница</h1>
      <Search usersFilter={usersFilter} dataLength={data.length} />
      <UsersList data={data} deleteUser={deleteUser} updateUser={updateUser} />
      <AddUser addUser={addUser} />
    </div>
  )
}
