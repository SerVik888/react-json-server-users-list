import React, { useReducer } from 'react'

import { usersReducer } from './usersReducer'
import { API } from '../../api'
import { GET_DATA, FILTER, ADD_USER, DELETE_USER, UPDATE_USER, IS_AUTH } from '../types'
import { UsersContext } from './UsersContext'
import { formReducer } from './formReducer'

export const UsersState = ({ children }) => {
  const initialState = {
    data: [],
  }
  const [state, usersDispatch] = useReducer(usersReducer, initialState)
  const [formState, formDispatch] = useReducer(formReducer, { isAuth: false })

  const setData = async () => {
    const data = await API.getUsers()
    usersDispatch({ type: GET_DATA, data })
  }
  const addUser = async (user) => {
    API.postUser(user)
    usersDispatch({ type: ADD_USER, user })
  }
  const updateUser = async (user) => {
    API.updateUser(user)
    usersDispatch({ type: UPDATE_USER, user })
  }
  const deleteUser = async (userId) => {
    API.deleteUser(userId)
    usersDispatch({ type: DELETE_USER, userId })
  }
  const usersFilter = (string) => usersDispatch({ type: FILTER, string })

  const loginUser = async (user) => {
    const isAuth = await API.authUser(user)
    formDispatch({ type: IS_AUTH, isAuth })
  }

  return (
    <UsersContext.Provider
      value={{
        data: state.data,
        isAuth: formState.isAuth,
        setData,
        addUser,
        deleteUser,
        usersFilter,
        updateUser,
        loginUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}
