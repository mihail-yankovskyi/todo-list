import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IToDoItem } from '../interfaces/IToDoItem';
import { TodoService } from '../services/todo.service';

@Component({
    selector: 'todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss'],
    standalone: false
})
export class TodoItemComponent {
  @Input() toDoItem!: IToDoItem;
  //toDoItem
  // @Output

  @Output() onDone: EventEmitter<number>  = new EventEmitter();
  @Output() onChange: EventEmitter<IToDoItem> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  done(id: number | undefined): void {


    // emit Output
    // todo-item -> app-list -> app-root
    // in app-root change corresponding IToDoItem(Object)
    this.onDone.emit(id);
  }

  deleteItem(): void {
    this.todoService.deleteTodo(this.toDoItem.id)
      .subscribe(() => this.todoService.updateTodos());
  }

  changeItem(): void {
    this.onChange.emit(this.toDoItem);
    // console.log(this.toDoItem.id);
  }

}
