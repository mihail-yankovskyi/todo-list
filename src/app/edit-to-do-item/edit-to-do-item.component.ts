import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, NgModel, Validators } from '@angular/forms';
import { IToDoItem } from '../interfaces/IToDoItem';

@Component({
  selector: 'app-edit-to-do-item',
  templateUrl: './edit-to-do-item.component.html',
  styleUrls: ['./edit-to-do-item.component.scss']
})

export class EditToDoItemComponent implements OnInit {
  @Input() toDoItem!: IToDoItem;

  @Output() onUpdateToDo: EventEmitter<IToDoItem> = new EventEmitter();
  //updateToDo

  // inputValue: string = '';

  // inputField: FormControl = new FormControl(this.toDoItem?.text, Validators.required);
  inputField: FormControl = new FormControl('', Validators.required);

  ngOnInit(): void {
    this.inputField.setValue(this.toDoItem?.text);
  }

  updateInputValue(): void {
    const updatedToDo: IToDoItem = {
      ...this.toDoItem,
      text: this.inputField.value
    };
    // this.updateToDo.emit(this.inputField.value);
    // console.log(this.toDoItem.text);
    this.onUpdateToDo.emit(updatedToDo);
    this.inputField.setValue('');
  }

  // resetField(inputField: NgModel) {
  //   inputField.reset();
  // }

  // pushItem(): void {
  //   this.inputValue = 'It works';
  // }
  //changeInputValue
}
