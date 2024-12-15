import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { addTodo, addTodoSuccess, getTodos, getTodosFailed, getTodosSuccess } from './todo.actions';
import { TodoService } from '../services/todo.service';
import { of } from 'rxjs';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(getTodos),
    switchMap(() => this.todoService.getTodos()
      .pipe(
        map(todos => {
          return getTodosSuccess({todos: todos})
        }),
        catchError(() => of(getTodosFailed()))
      ))
    )
  );

  addTodo$ = createEffect(() => this.actions$.pipe(
    ofType(addTodo),
    switchMap((action) => this.todoService.addTodo(action.title)
      .pipe(
        map(todo => {
          console.log(todo)
          return addTodoSuccess({todo: todo})
        }),
        catchError(() => of(getTodosFailed()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}
}
