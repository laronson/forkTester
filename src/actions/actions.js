import {createAction} from 'redux-actions';

export const addTodo = () => (dispatch) => {
  dispatch(createAction("ADD TODO")(["hello"]))
}

export const changeMessage = () => (dispatch) => {
  dispatch(createAction("CHANGE_MESSAGE")())
}
