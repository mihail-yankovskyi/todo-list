import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-component',
  templateUrl: './to-do-component.component.html',
  styleUrls: ['./to-do-component.component.scss']
})
export class ToDoComponentComponent implements OnInit {

  check:boolean = false;

  doneF(): void {
    if(this.check === false) {
      this.check = true;
    } else {
      this.check = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
