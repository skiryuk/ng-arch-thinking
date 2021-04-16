import { Observable } from 'rxjs';
import { Todo } from './todo.models';
import { Injectable } from '@angular/core';

// Сервис данных - абстракция
// (чтобы независеть от источника данных (апи, моки, локальное хранилище)
@Injectable()
export abstract class ITodoService {
  abstract getTodoList(): Observable<Todo[]>;
}
