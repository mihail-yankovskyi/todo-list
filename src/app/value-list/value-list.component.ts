import { Component, Input, OnInit } from '@angular/core';
import { IToDoItem } from '../interfaces/IToDoItem';

@Component({
  selector: 'app-value-list',
  templateUrl: './value-list.component.html',
  styleUrls: ['./value-list.component.scss']
})
export class ValueListComponent implements OnInit {


  @Input() dataValue!: IToDoItem[];


  constructor() { }

  ngOnInit(): void {
  }

}
