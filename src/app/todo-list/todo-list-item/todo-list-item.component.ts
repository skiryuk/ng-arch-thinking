import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Todo } from '../../core/models/todo.models';
import { ETodoStatuses } from '../../core/enums/todo.enums';
import { TodoListItemFacade } from './todo-list-item.facade';
import { TodoListFacade } from '../todo-list.facade';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TodoListItemFacade]
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;

  get done() {
    return this.todo.statusId === ETodoStatuses.DONE;
  }

  constructor(
    private _parentFacade: TodoListFacade,
    private _childFacade: TodoListItemFacade
  ) { }

  ngOnInit() {
  }

  public onChangeStatus(id: number): void {
    // мы можем обратиться при необходимости к родительскому фасаду
    this._parentFacade.changeStatus(id);
    // а можем к текущему фасаду
    // this._childFacade.changeStatus(id);
  }
}
