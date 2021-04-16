import { Injectable } from '@angular/core';
import { TodoRepository } from '../../core/todo/todo.repository';

@Injectable()
export class TodoListItemStore {
  constructor(private _todoRepository: TodoRepository) {}

  public changeStatus(id: number): void {
    this._todoRepository.changeStatus(id);
  }
}
