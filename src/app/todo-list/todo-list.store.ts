import { Injectable } from '@angular/core';
import { TodoStore } from '../core/todo/todo.store';
import { Todo } from '../core/todo/todo.models';

@Injectable()
export class TodoListStore {
  constructor(private _todoStore: TodoStore) {}

  public revNumber = Math.random();

  public get todosListState() { return this._todoStore.todoListState; }

  public getTodoList() {
    this._todoStore.getTodoList();
  }

  public addTodo(todo: Todo): void {
    this._todoStore.addTodo(todo);
  }

  public changeStatus(id: number): void {
    this._todoStore.changeStatus(id);
  }
}
