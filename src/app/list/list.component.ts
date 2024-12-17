import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { IToDoItem } from '../interfaces/todo-item.interface';
import { BehaviorSubject } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { Store } from '@ngrx/store';
import { selectTodos } from '../state/todo.selectors';
import { IState } from '../interfaces/state.interface';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    standalone: false
})
export class ListComponent {
  todos$ = this.store.select(selectTodos);

  // @Output() onDone: EventEmitter<number>  = new EventEmitter();
  // @Output() onDelete: EventEmitter<number>  = new EventEmitter();
  // @Output() onChange: EventEmitter<IToDoItem> = new EventEmitter();
  // store dispatch for all Outputs

  constructor(
    private store: Store<IState>
  ) {}

  done(id: number) {
    // this.onDone.emit(id);
  }

  changeItem(toDoItem: IToDoItem): void {
    // this.onChange.emit(toDoItem);
  }
}
