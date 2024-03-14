import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IToDoItem } from '../interfaces/IToDoItem';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() toDoItem!: IToDoItem;
  //toDoItem
  // @Output

  @Output() onDone: EventEmitter<number>  = new EventEmitter();
  @Output() onDelete: EventEmitter<number> = new EventEmitter();
  @Output() onChange: EventEmitter<IToDoItem> = new EventEmitter();

  done(id: number | undefined): void {


    // emit Output
    // todo-item -> app-list -> app-root
    // in app-root change corresponding IToDoItem(Object)
    this.onDone.emit(id);
  }

  deleteItem(id: number | undefined): void {
    this.onDelete.emit(id);
  }

  changeItem() {
    this.onChange.emit(this.toDoItem);
    // console.log(this.toDoItem.id);
  }

}
