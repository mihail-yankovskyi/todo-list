import { Component } from '@angular/core';
import { IToDoItem } from './interfaces/IToDoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toDoTasks: IToDoItem[] = [];
  idForToDo: number = 0;
  showInput: boolean = true;
  toDoItemToEdit!: IToDoItem;

  onAddToDo(input: string): void {
    this.idForToDo++;
    this.toDoTasks.push({ id: this.idForToDo, text: input, isDone: false });

    // console.log(this.toDoTasks);
  }

  done(id: number): void {
    const index = this.toDoTasks.findIndex(task => task.id === id);
    const toDoTask = {...this.toDoTasks[index]};

    // const toDoTask = {};
    // toDoTask.id = this.toDoTasks[index].id;
    // toDoTask.isDone = this.toDoTasks[index].isDone;

    toDoTask!.isDone = !toDoTask!.isDone;

    this.toDoTasks = this.toDoTasks.map(currentTask => {
      if(currentTask.id === toDoTask.id) {
        return toDoTask;
      }

      return currentTask;
    })
  }

  deleteItem(id: number): void {
    // const indexD = this.toDoTasks.findIndex(task => task.id === id);
    // const toDoTaskD = {... this.toDoTasks[indexD]};

    this.toDoTasks = this.toDoTasks.filter(item => item.id !== id);
  }

  changeItem(toDoItem: IToDoItem): void {
    this.showInput = false;
    this.toDoItemToEdit = toDoItem;
  }

  updateToDo(toDoItem: IToDoItem) {
    //map
    //instead of toDoTask.id toDoItem.id
    this.toDoTasks = this.toDoTasks.map(currentTask => {
      if(currentTask.id === toDoItem.id){
        return toDoItem;
      }
      return currentTask;
    })

    this.showInput = true;
  }
}
