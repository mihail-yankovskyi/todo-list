import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { IToDoItem } from '../interfaces/IToDoItem';
import { BehaviorSubject } from 'rxjs';
import { TodoService } from '../services/todo.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    standalone: false
})
export class ListComponent {
  todos$: BehaviorSubject<IToDoItem[]> = this.todoService.todos$;
  // @Input() toDoItems!: IToDoItem[];
  // @Output
  @Output() onDone: EventEmitter<number>  = new EventEmitter();
  @Output() onDelete: EventEmitter<number>  = new EventEmitter();
  @Output() onChange: EventEmitter<IToDoItem> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  done(id: number) {
    this.onDone.emit(id);
  }

  changeItem(toDoItem: IToDoItem): void {
    this.onChange.emit(toDoItem);
  }
}
