import { Injectable } from '@angular/core';
import { TodoFacade } from '../core/services/todo.facade';
import { Todo } from '../core/models/todo.models';

@Injectable()
export class TodoListFacade {
  constructor(private _todoFacade: TodoFacade) {}

  public revNumber = Math.random();

  public get todosListState() { return this._todoFacade.todoListState; }

  public getTodoList() {
    this._todoFacade.getTodoList();
  }

  public addTodo(todo: Todo): void {
    this._todoFacade.addTodo(todo);
  }

  public changeStatus(id: number): void {
    this._todoFacade.changeStatus(id);
  }
}
