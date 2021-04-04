import { Injectable } from '@angular/core';
import { TodoStore } from '../../core/todo/todo.store';

@Injectable()
export class TodoListItemStore {
  constructor(private _todoStore: TodoStore) {}

  public changeStatus(id: number): void {
    this._todoStore.changeStatus(id);
  }
}
