import { useCallback, useContext, useEffect, useState } from 'react'
import './App.css'
import { HomePage } from './components/homePage/HomePage'
import { LoginPage } from './components/loginPage/LoginPage'
import { UsersContext } from './context/usersContext/UsersContext'

function App() {
  const { data, isAuth, setData, addUser, deleteUser, updateUser, usersFilter, loginUser } = useContext(UsersContext)

  // useEffect(() => {
  console.log(isAuth)
  // }, [])

  return (
    <div className='App'>
      {/* {!isAuth ? ( */}
      <LoginPage loginUser={loginUser} />
      {/* ) : ( */}
      <HomePage
        data={data}
        setData={setData}
        addUser={addUser}
        deleteUser={deleteUser}
        updateUser={updateUser}
        usersFilter={usersFilter}
      />
      {/* )} */}
    </div>
  )
}

export default App
