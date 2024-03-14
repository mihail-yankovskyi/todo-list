import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { IToDoItem } from '../interfaces/IToDoItem';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() toDoItems!: IToDoItem[];
  // @Output
  @Output() onDone: EventEmitter<number>  = new EventEmitter();
  @Output() onDelete: EventEmitter<number>  = new EventEmitter();
  @Output() onChange: EventEmitter<IToDoItem> = new EventEmitter();

  done(id: number) {
    this.onDone.emit(id);
  }

  deleteItem(id: number) {
    this.onDelete.emit(id);
  }

  changeItem(toDoItem: IToDoItem): void {
    this.onChange.emit(toDoItem);
  }
}
