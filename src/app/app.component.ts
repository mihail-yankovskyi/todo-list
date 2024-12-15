import { Component, OnInit } from '@angular/core';
import { IToDoItem } from './interfaces/todo-item.interface';
import { TodoService } from './services/todo.service';
import { Store } from '@ngrx/store';
import { getTodos } from './state/todo.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
  // toDoTasks: IToDoItem[] = [];
  showInput: boolean = true;
  // toDoItemToEdit!: IToDoItem;

  constructor(
    private store: Store
  ) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.store.dispatch(getTodos());
  }

  onAddToDo(input: string): void {
    // this.idForToDo++;
    // this.toDoTasks.push({ id: this.idForToDo, title: input, isDone: false });
  }

  done(id: number): void {
    // const index = this.toDoTasks.findIndex(task => task.id === id);
    // const toDoTask = {...this.toDoTasks[index]};

    // // const toDoTask = {};
    // // toDoTask.id = this.toDoTasks[index].id;
    // // toDoTask.isDone = this.toDoTasks[index].isDone;

    // toDoTask!.isDone = !toDoTask!.isDone;

    // this.toDoTasks = this.toDoTasks.map(currentTask => {
    //   if(currentTask.id === toDoTask.id) {
    //     return toDoTask;
    //   }

    //   return currentTask;
    // })
  }

  deleteItem(id: number): void {
    // const indexD = this.toDoTasks.findIndex(task => task.id === id);
    // const toDoTaskD = {... this.toDoTasks[indexD]};

    // this.toDoTasks = this.toDoTasks.filter(item => item.id !== id);
  }

  changeItem(toDoItem: IToDoItem): void {
    // this.showInput = false;
    // this.toDoItemToEdit = toDoItem;
  }

  updateToDo(toDoItem: IToDoItem) {
    //map
    //instead of toDoTask.id toDoItem.id
    // this.toDoTasks = this.toDoTasks.map(currentTask => {
    //   if(currentTask.id === toDoItem.id){
    //     return toDoItem;
    //   }
    //   return currentTask;
    // })

    this.showInput = true;
  }
}
