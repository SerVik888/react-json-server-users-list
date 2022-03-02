export const API = {
  getUsers: async () => {
    try {
      const response = await fetch(`http://localhost:3004/data`)
      return response.json()
    } catch (e) {
      console.error(e)
    }
  },
  postUser: async (user) => {
    try {
      const response = await fetch(`http://localhost:3004/data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(user),
      })
      return response.json()
    } catch (e) {
      console.error(e)
    }
  },
  updateUser: async (user) => {
    try {
      const response = await fetch(`http://localhost:3004/data/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(user),
      })
      return response.json()
    } catch (e) {
      console.error(e)
    }
  },
  deleteUser: async (userId) => {
    try {
      const response = await fetch(`http://localhost:3004/data/${userId}`, {
        method: 'DELETE',
      })
      return response.json()
    } catch (e) {
      console.error(e)
    }
  },
  authUser: async (user) => {
    try {
      const response = await fetch(`http://localhost:3004/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(user),
      })
      return response.ok
    } catch (e) {
      console.error(e)
    }
  },
}
