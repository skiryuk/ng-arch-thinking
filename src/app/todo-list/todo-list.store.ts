import { Injectable } from '@angular/core';
import { TodoRepository } from '../core/todo/todo.repository';
import { Todo } from '../core/todo/todo.models';

@Injectable()
export class TodoListStore {
  constructor(private _todoRepository: TodoRepository) {}

  public revNumber = Math.random();

  public get todosListState() { return this._todoRepository.todoListState; }

  public getTodoList() {
    this._todoRepository.getTodoList();
  }

  public addTodo(todo: Todo): void {
    this._todoRepository.addTodo(todo);
  }

  public changeStatus(id: number): void {
    this._todoRepository.changeStatus(id);
  }
}
