import { ADD_USER, DELETE_USER, FILTER, GET_DATA, UPDATE_USER } from '../types'

export const usersReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.data,
      }
    case ADD_USER:
      return {
        ...state,
        data: [...state.data, action.user],
      }
    case UPDATE_USER:
      return {
        ...state,
        data: state.data.map((user) => {
          if (user.id === action.user.id) {
            user.name = action.user.name
            user.tel = action.user.tel
          }
          return user
        }),
      }
    case DELETE_USER:
      return {
        ...state,
        data: state.data.filter((user) => user.id !== action.userId),
      }
    case FILTER:
      return {
        ...state,
        data: state.data.filter((i) => {
          return (
            String(i.name).toLowerCase().includes(action.string.toLowerCase()) ||
            String(i.tel).toLowerCase().includes(action.string.toLowerCase())
          )
        }),
      }
    default:
      return state
  }
}
