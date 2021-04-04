import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

import { Todo } from './todo.models';
import { ITodoRepository } from './todo.repository';

// Репозиторий на методах апи
@Injectable()
export class ApiTodoRepository implements ITodoRepository {

  constructor(
    private _http: HttpClient
  ) {
  }

  public getTodoList(): Observable<Todo[]> {
    return this._http.get<Todo[]>('http://localhost:3000/api/todo/get');
      /*.pipe(catchError((error: HttpErrorResponse) => {
        return throwError(
          error);
        }));*/
  }
}
