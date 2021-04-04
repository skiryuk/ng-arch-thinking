import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { ETodoStatuses } from '../core/enums/todo.enums';
import { TodoListFacade } from './todo-list.facade';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoListFacade],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit, OnDestroy {

  public form: FormGroup;

  private _subs: Subscription = new Subscription();

  get todos$() {
    return this._facade.todosListState.data$;
  }

  get isLoadingTodos$() {
    return this._facade.todosListState.loading$;
  }

  constructor(
    private _fb: FormBuilder,
    private _facade: TodoListFacade
  ) {
  }

  ngOnInit() {
    this._buildForm();
    this._facade.getTodoList();

    // не очень нравятся тут подписки
    this._subs.add(this._facade.todosListState.success$
      .pipe(filter(isSuccess => !!isSuccess))
      .subscribe(() => this.form.get('title').setValue('')));
  }

  private _buildForm(): void {
    this.form = this._fb.group({
      title: ['']
    });
  }

  public onAddTodo(): void {
    this._facade.addTodo({
      id: new Date().getTime(),
      title: this.form.get('title').value,
      statusId: ETodoStatuses.IN_PROGRESS
    });
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
