import { createSelector } from "@ngrx/store";
import { ITodoState } from "../interfaces/todo-state.interface";
import { IToDoItem } from "../interfaces/todo-item.interface";
import { IState } from "../interfaces/state.interface";

export const todoFeature = (state: IState): ITodoState => state.todos;

export const getTodos = (state: ITodoState): IToDoItem[] => state.todos;

export const selectTodos = createSelector(todoFeature, getTodos);
