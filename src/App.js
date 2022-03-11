import { useContext } from 'react'
import './App.css'
import { HomePage } from './components/homePage/HomePage'
import { LoginPage } from './components/loginPage/LoginPage'
import { UsersContext } from './context/usersContext/UsersContext'

function App() {
  const { data, isAuth, setData, addUser, deleteUser, updateUser, usersFilter, loginUser, loading } =
    useContext(UsersContext)

  return (
    <div className='App'>
      {isAuth ? (
        <LoginPage loginUser={loginUser} />
      ) : (
        <HomePage
          data={data}
          loading={loading}
          setData={setData}
          addUser={addUser}
          deleteUser={deleteUser}
          updateUser={updateUser}
          usersFilter={usersFilter}
        />
      )}
    </div>
  )
}

export default App
