import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { UsersState } from './context/usersContext/UsersState'

ReactDOM.render(
  <UsersState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UsersState>,
  document.getElementById('root')
)
reportWebVitals()
