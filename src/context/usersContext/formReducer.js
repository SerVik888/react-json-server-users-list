import { IS_AUTH } from '../types'

const handlers = {
  [IS_AUTH]: (state, action) => ({
    ...state,
    isAuth: action.isAuth,
  }),
  DEFAULT: (state) => state,
}

export const formReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
