import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Output() addToDo: EventEmitter<string> = new EventEmitter();

  inputField: FormControl = new FormControl('', Validators.required);

  ngOnInit(): void {
  }

  extractInputValue(): void {
    this.addToDo.emit(this.inputField.value);
    this.inputField?.setValue('');
  }
}
