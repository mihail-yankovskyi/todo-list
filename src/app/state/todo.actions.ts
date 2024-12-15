import { createAction, props } from '@ngrx/store';
import { IToDoItem } from '../interfaces/todo-item.interface';

export const getTodos = createAction('[TODO] Get Todos');
export const getTodosSuccess = createAction('[TODO] Get Todos Success', props<{ todos: IToDoItem[] }>());
export const getTodosFailed = createAction('[TODO] Get Todos Failed');

export const addTodo = createAction('[TODO] Add Todos', props<{ todo: IToDoItem }>());
export const addTodoSuccess = createAction('[TODO] Add Todo Success');
export const addTodoFailed = createAction('[TODO] Add Todo Failed');
