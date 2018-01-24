import uuid from 'uuid/v4';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.payload,
          completed: false,
          id: uuid(),
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === action.id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo,
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)

    case 'DELETE_ALL_TODO':
      return state.filter(todo => !todo.completed)
    default:
      return state;
  }
};
