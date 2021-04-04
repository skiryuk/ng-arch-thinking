import { Injectable } from '@angular/core';
import { TodoFacade } from '../../core/services/todo.facade';

@Injectable()
export class TodoListItemFacade {
  constructor(private _todoFacade: TodoFacade) {}

  public changeStatus(id: number): void {
    this._todoFacade.changeStatus(id);
  }
}
