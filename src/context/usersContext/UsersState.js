import React, { useReducer } from 'react'

import { usersReducer } from './usersReducer'
import { API } from '../../api'
import { GET_DATA, FILTER, ADD_USER, DELETE_USER, UPDATE_USER, IS_AUTH, LOADING } from '../types'
import { UsersContext } from './UsersContext'
import { authReducer } from './authReducer'

export const UsersState = ({ children }) => {
  const initialState = {
    data: [],
    loading: false,
  }
  const [usersState, usersDispatch] = useReducer(usersReducer, initialState)
  const [authState, authDispatch] = useReducer(authReducer, { isAuth: false })

  const setLoading = (loading) => {
    usersDispatch({ type: LOADING, loading })
  }
  const setData = async () => {
    setLoading(true)
    const data = await API.getUsers()
    usersDispatch({ type: GET_DATA, data })
    setLoading(false)
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
    authDispatch({ type: IS_AUTH, isAuth })
  }

  return (
    <UsersContext.Provider
      value={{
        data: usersState.data,
        loading: usersState.loading,
        isAuth: authState.isAuth,
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
