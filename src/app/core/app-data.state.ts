import { BehaviorSubject, Observable } from 'rxjs';

// абстракция над данными,
// получаемых с источника данных (с индикацией загрузки данных и признака успеха/неудачи)
export class AppDataState<T> {
  private _data$: BehaviorSubject<T> = new BehaviorSubject(null);
  public data$: Observable<T> = this._data$.asObservable();

  private _loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public loading$: Observable<boolean> = this._loading$.asObservable();

  private _error$: BehaviorSubject<string> = new BehaviorSubject(null);
  public error$: Observable<string> = this._error$.asObservable();

  private _success$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  public success$: Observable<boolean> = this._success$.asObservable();

  set data(data: T) {
    this._data$.next(data);
  }

  get data() {
    return this._data$.value;
  }

  set loading(loading: boolean) {
    this._loading$.next(loading);
  }

  get loading() {
    return this._loading$.value;
  }

  set error(error: string) {
    this._error$.next(error);
  }

  get error() {
    return this._error$.value;
  }

  set success(success: boolean) {
    this._success$.next(success);
  }

  get success() {
    return this._success$.value;
  }

  public clear(): void {
    this.data = null;
    this.loading = false;
    this.error = null;
  }

  public beginLoading(): void {
    this.data = null;
    this.loading = true;
    this.error = null;
  }

  public endLoadingSuccess(data: T): void {
    this.data = data;
    this.success = true;
    this.loading = false;
    this.error = null;
  }

  public endLoadingError(error: string): void {
    this.data = null;
    this.success = false;
    this.loading = false;
    this.error = error;
  }
}

