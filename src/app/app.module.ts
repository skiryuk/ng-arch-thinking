import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ITodoService } from './core/todo/todo.service';
import { MockTodoService } from './core/todo/mock-todo.service';
import { ApiTodoService } from './core/todo/api-todo.service';

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
      provide: ITodoService,
      useClass: MockTodoService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
