import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { Store } from '@ngrx/store';
import { IState } from '../interfaces/state.interface';
import { addTodo } from '../state/todo.actions';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    standalone: false
})
export class InputComponent implements OnInit {
  // @Output() addToDo: EventEmitter<string> = new EventEmitter();

  inputField: FormControl = new FormControl('', Validators.required);

  constructor(private store: Store<IState>) {}

  ngOnInit(): void {
  }

  saveTodo(): void {
    // this.addToDo.emit(this.inputField.value);
    // this.todoService.addTodo()
    // this.todoService.addTodo(this.inputField.value)
    //   .subscribe(() => this.todoService.updateTodos());

    // this store dispatch new saveTodo

    this.store.dispatch(addTodo({ title: this.inputField.value }));
    //this.inputField.value

    this.inputField?.setValue('');
  }
}
