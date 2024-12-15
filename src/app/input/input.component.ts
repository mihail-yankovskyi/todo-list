import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    standalone: false
})
export class InputComponent implements OnInit {
  // @Output() addToDo: EventEmitter<string> = new EventEmitter();

  inputField: FormControl = new FormControl('', Validators.required);

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
  }

  saveTodo(): void {
    // this.addToDo.emit(this.inputField.value);
    // this.todoService.addTodo()
    // this.todoService.addTodo(this.inputField.value)
    //   .subscribe(() => this.todoService.updateTodos());

    // this store dispatch new saveTodo
    this.inputField?.setValue('');
  }
}
