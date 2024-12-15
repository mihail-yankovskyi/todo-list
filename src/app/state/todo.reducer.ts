import { createReducer, on } from '@ngrx/store';
import { getTodosSuccess } from './todo.actions';
import { ITodoState } from '../interfaces/todo-state.interface';

export const initialState: ITodoState = {
  todos: []
};

export const todoReducer = createReducer(
  initialState,
  on(getTodosSuccess, (state, props) => {
    return {
      ...state,
      todos: props.todos
    };
  }),
  // on(addTodosSuccess, (state, props) => {
  //   return {
  //     ...state,
  //     todos: props.todos
  //   };
);
