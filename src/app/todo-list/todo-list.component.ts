import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { ETodoStatuses } from '../core/todo/todo.enums';
import { TodoListStore } from './todo-list.store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoListStore],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit, OnDestroy {

  public form: FormGroup;

  private _subs: Subscription = new Subscription();

  get todos$() {
    return this._store.todosListState.data$;
  }

  get isLoadingTodos$() {
    return this._store.todosListState.loading$;
  }

  constructor(
    private _fb: FormBuilder,
    private _store: TodoListStore
  ) {
  }

  ngOnInit() {
    this._buildForm();
    this._store.getTodoList();

    // не очень нравятся тут подписки
    this._subs.add(this._store.todosListState.success$
      .pipe(filter(isSuccess => !!isSuccess))
      .subscribe(() => this.form.get('title').setValue('')));
  }

  private _buildForm(): void {
    this.form = this._fb.group({
      title: ['']
    });
  }

  public onAddTodo(): void {
    this._store.addTodo({
      id: new Date().getTime(),
      title: this.form.get('title').value,
      statusId: ETodoStatuses.IN_PROGRESS
    });
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
