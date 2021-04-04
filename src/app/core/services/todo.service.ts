import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

import { Todo } from '../models/todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private _http: HttpClient
  ) {
  }

  public getTodoList(): Observable<Todo[]> {
    // return this._http.get<Todo[]>('http://localhost:3000/api/todo/get');
    return this._http.get<Todo[]>('assets/data/todos.json')
      .pipe(delay(1000));
      /*.pipe(catchError((error: HttpErrorResponse) => {
        return throwError(
          error);
        }));*/
  }
}
