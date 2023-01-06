import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Components
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItemComponent } from './components/todo-input-add-item/todo-input-add-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

//Pages
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItemComponent,
    TodoListComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
