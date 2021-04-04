import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ITodoRepository } from './core/todo/todo.repository';
import { MockTodoRepository } from './core/todo/mock-todo.repository';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: ITodoRepository,
      useClass: MockTodoRepository
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
