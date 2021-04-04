import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';


@NgModule({
  declarations: [TodoListComponent, TodoListItemComponent],
  exports: [TodoListComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoListModule { }
