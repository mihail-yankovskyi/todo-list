import { createReducer, on } from '@ngrx/store';
import { addTodoSuccess, deleteTodoSuccess, getTodosSuccess } from './todo.actions';
import { ITodoState } from '../interfaces/todo-state.interface';

export const initialState: ITodoState = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,
  on(getTodosSuccess, (state, props) => {
    return {
      ...state,
      todos: props.todos
    };
  }),
  on(addTodoSuccess, (state, props) => {
    return {
      ...state,
      todos: [...state.todos, props.todo]
    };
  }),
  on(deleteTodoSuccess, (state, props) => {
    return {
      ...state,
      todos: state.todos.filter(todo => todo.id !== props.id)
    };
  })
);
