import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions'

const rootReducer = handleActions({
  ["ADD TODO"] : (state, action) => (
		Object.assign({}, state, {todoList : action.payload})
	),
  ["CHANGE_MESSAGE"] : (state, action) => (
    Object.assign({}, state, {message: "new Hello"})
  )
}, {
  todoList: 1,
  message: "hello"
})

export default rootReducer;

// export default (state = {}, action) => {
//   switch(action.type) {
//     case 'ADD TODO':
//       return {
//         todoList: action.payload
//       }
//     default: return {
//       todoList: "init"
//     }
//     return state
//   }
// }
