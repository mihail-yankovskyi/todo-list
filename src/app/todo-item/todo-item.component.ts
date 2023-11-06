import { Component, Input, OnInit } from '@angular/core';
import { IToDoItem } from '../interfaces/IToDoItem';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() dataValue!: IToDoItem;
  // @Output

  constructor() { }

  ngOnInit(): void {
  }

  done(): void {
    console.log(this.dataValue)
    // emit Output
    // todo-item -> app-list -> app-root
    // in app-root change corresponding IToDoItem(Object)
  }

}
