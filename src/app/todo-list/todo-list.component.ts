import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from '../core/services/todo.service';
import { Todo } from '../core/models/todo.models';
import { Observable } from 'rxjs';
import { ETodoStatuses } from '../core/enums/todo.enums';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  public form: FormGroup;

  public todos$: Observable<Todo[]>;

  public ETodoStatuses;

  constructor(
    private _fb: FormBuilder,
    private _todoService: TodoService
  ) {
  }

  ngOnInit() {
    this.ETodoStatuses = ETodoStatuses;
    this.todos$ = this._todoService.todos$;
    this._buildForm();
    this._todoService.getTodoList();
  }

  private _buildForm(): void {
    this.form = this._fb.group({
      title: ['']
    });
  }

  public onAddTodo(): void {
    this._todoService.addTodo({
      id: new Date().getTime(),
      title: this.form.get('title').value,
      statusId: ETodoStatuses.IN_PROGRESS
    });
  }

  public onChangeStatus(id: number): void {
    this._todoService.changeStatus(id);
  }
}
