export const addTodo = (payload) => ({
  type: 'ADD_TODO',
  payload
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id
})

export const deleteAllTodo = () => ({
  type: 'DELETE_ALL_TODO'
})