import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Todo } from '../../core/todo/todo.models';
import { ETodoStatuses } from '../../core/todo/todo.enums';
import { TodoListItemStore } from './todo-list-item.store';
import { TodoListStore } from '../todo-list.store';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TodoListItemStore]
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;

  get done() {
    return this.todo.statusId === ETodoStatuses.DONE;
  }

  constructor(
    private _parentStore: TodoListStore,
    private _store: TodoListItemStore
  ) { }

  ngOnInit() {
  }

  public onChangeStatus(id: number): void {
    // мы можем обратиться при необходимости к родительскому стору
    this._parentStore.changeStatus(id);
    // а можем к текущему стору
    // this._store.changeStatus(id);
  }
}
