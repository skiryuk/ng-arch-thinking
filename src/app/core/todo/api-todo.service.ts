import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

import { Todo } from './todo.models';
import { ITodoService } from './todo.service';

// Сервис на методах апи
@Injectable()
export class ApiTodoService implements ITodoService {

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
