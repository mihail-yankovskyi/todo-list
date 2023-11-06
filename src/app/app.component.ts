import { Component } from '@angular/core';
import { IToDoItem } from './interfaces/IToDoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toDoTasks: IToDoItem[] = [];
  try: any[] = [];
  idForMas: number = 0;

  onAddToDo(input: string): void {
    this.idForMas++;
    this.toDoTasks.push({ id: this.idForMas, text: input, isDone: false });

    console.log(this.toDoTasks);
  }
}
