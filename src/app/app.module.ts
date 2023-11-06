import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { ValueListComponent } from './value-list/value-list.component';
import { ToDoComponentComponent } from './to-do-component/to-do-component.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent,
    ValueListComponent,
    ToDoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
