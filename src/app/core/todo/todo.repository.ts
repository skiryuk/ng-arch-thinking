import { Observable } from 'rxjs';
import { Todo } from './todo.models';
import { Injectable } from '@angular/core';

// Репозиторий - абстракция
// (чтобы независеть от источника данных (апи, моки, локальное хранилище)
@Injectable()
export abstract class ITodoRepository {
  abstract getTodoList(): Observable<Todo[]>;
}
