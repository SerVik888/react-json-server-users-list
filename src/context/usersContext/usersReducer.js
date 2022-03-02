import { ADD_USER, DELETE_USER, FILTER, GET_DATA, SORT_DOWN, SORT_TOP, UPDATE_USER } from '../types'

const handlers = {
  [GET_DATA]: (state, action) => ({
    ...state,
    data: action.data,
  }),
  [ADD_USER]: (state, action) => ({
    ...state,
    data: [...state.data, action.user],
  }),
  [UPDATE_USER]: (state, action) => ({
    ...state,
    data: state.data.map((user) => {
      if (user.id === action.user.id) {
        user.name = action.user.name
        user.tel = action.user.tel
      }
      return user
    }),
  }),
  [DELETE_USER]: (state, action) => ({
    ...state,
    data: state.data.filter((user) => user.id !== action.userId),
  }),

  [FILTER]: (state, action) => ({
    ...state,
    data: state.data.filter((i) => {
      return (
        String(i.name).toLowerCase().includes(action.string.toLowerCase()) ||
        String(i.tel).toLowerCase().includes(action.string.toLowerCase())
      )
    }),
  }),
  DEFAULT: (state) => state,
}

export const usersReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
