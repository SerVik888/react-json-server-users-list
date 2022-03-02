import React, { useCallback, useEffect } from 'react'
import { AddUser } from './AddUser'
import { Search } from './Search'
import { UsersList } from './UsersList'

export const HomePage = ({ data, setData, addUser, deleteUser, updateUser, usersFilter }) => {
  // const loadData = useCallback(async () => await setData(), [setData, addUser])

  // useEffect(() => {
  //   setData()
  // }, [data.length])

  return (
    <div>
      <h1>Домашняя страница</h1>
      <Search usersFilter={usersFilter} dataLength={data.length} />
      <UsersList data={data} deleteUser={deleteUser} updateUser={updateUser} setData={setData} />
      <AddUser addUser={addUser} />
    </div>
  )
}
