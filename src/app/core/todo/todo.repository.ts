import { Inject, Injectable } from '@angular/core';
import { Todo } from './todo.models';
import { ETodoStatuses } from './todo.enums';
import { AppDataState } from '../app-data.state';
import { ITodoService } from './todo.service';

// Репозиторий по идеологии mobx: свойства (данные) и экшены
// Слой для общения с сервисами (связывает бизнес-логику и необходимые для нее апи вызовы)
@Injectable({
  providedIn: 'root'
})
export class TodoRepository {

  // не очень что торчит наружу,
  // снаружи могут вызывать методы у стейты (beginLoading, clear и т.д) что не оч хорошо
  public todoListState: AppDataState<Todo[]> = new AppDataState();

  constructor(@Inject(ITodoService) private _todoService: ITodoService) {
  }

  public getTodoList(): void {
    this.todoListState.beginLoading();
    this._todoService.getTodoList()
      .subscribe(
        data => this.todoListState.endLoadingSuccess(data),
        error => this.todoListState.endLoadingError(error) // обработку ошибок лучше делать тут или лучше в сервисе?
      );
  }

  public addTodo(todo: Todo): void {
    this.todoListState.data = [todo, ...this.todoListState.data];
  }

  public changeStatus(id: number): void {
    this.todoListState.data =
      this.todoListState.data
        .map(t => t.id === id ?
          {id, title: t.title, statusId: t.statusId === ETodoStatuses.IN_PROGRESS ? ETodoStatuses.DONE : ETodoStatuses.IN_PROGRESS} :
          t);
  }
}
