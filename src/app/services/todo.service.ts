import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IToDoItem } from '../interfaces/todo-item.interface';

const url = 'http://localhost:3000/api/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  addTodos() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  getTodos(): Observable<IToDoItem[]> {
    // Возвращаем Observable, который выполнит запрос и вернёт данные
    return this.http.get<IToDoItem[]>(url);
  }

  addTodo(title: string): Observable<IToDoItem> {
    const body = { title };
    // const body = { title: tt };
    console.log(title);
    return this.http.post<IToDoItem>(url, body);
  }

  deleteTodo(id: number): Observable<void> {
    const body = { id };

    return this.http.delete<void>(url, {
      body: body
    });
  }
}
