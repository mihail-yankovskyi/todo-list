import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { getTodos, getTodosFailed, getTodosSuccess } from './todo.actions';
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

  // addTodos$ = createEffect(() => this.actions$.pipe(
  //   ofType(addTodos),
  //   switchMap(() => this.todoService.Todos()
  //     .pipe(
  //       map(todos => {
  //         return getTodosSuccess({todos: todos})
  //       }),
  //       catchError(() => of(getTodosFailed()))
  //     ))
  //   )
  // );

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}
}
