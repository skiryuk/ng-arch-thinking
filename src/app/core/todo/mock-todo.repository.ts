import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

import { Todo } from './todo.models';
import { ITodoRepository } from './todo.repository';

// Репозиторий на моках
@Injectable()
export class MockTodoRepository implements ITodoRepository {

  constructor(
    private _http: HttpClient
  ) {
  }

  public getTodoList(): Observable<Todo[]> {
    return this._http.get<Todo[]>('./data/todos.json')
      .pipe(delay(1000));
      /*.pipe(catchError((error: HttpErrorResponse) => {
        return throwError(
          error);
        }));*/
  }
}
