import { Component, Input, OnInit, } from '@angular/core';
import { IToDoItem } from '../interfaces/IToDoItem';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data!: IToDoItem[];
  // @Output

  constructor() { }

  ngOnInit(): void {
  }

}
