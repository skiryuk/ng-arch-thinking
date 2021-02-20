import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Todo } from '../models/todo.models';
import { HttpClient } from '@angular/common/http';
import { ETodoStatuses } from '../enums/todo.enums';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly _todos$: BehaviorSubject<Todo[]> = new BehaviorSubject([]);
  public todos$: Observable<Todo[]> = this._todos$.asObservable();

  constructor(
    private _http: HttpClient
  ) {
  }

  public getTodoList(): void {
    this._http.get<Todo[]>('assets/data/todos.json')
      .subscribe(data => {
        this._todos$.next(data);
      });
  }

  public addTodo(todo: Todo): void {
    this._todos$.next([todo, ...this._todos$.value]);
  }

  public changeStatus(id: number): void {
    this._todos$.next(
      this._todos$.value
        .map(t => t.id === id ?
          {id, title: t.title, statusId: t.statusId === ETodoStatuses.IN_PROGRESS ? ETodoStatuses.DONE : ETodoStatuses.IN_PROGRESS} :
          t)
    );
  }
}
