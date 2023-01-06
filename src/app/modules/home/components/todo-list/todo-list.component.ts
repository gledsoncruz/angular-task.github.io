import { Component, DoCheck } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Task[] = JSON.parse(localStorage.getItem('list') || '[]');

  ngDoCheck() {
    this.setLocalStorage();
  }

  public deleteItem(event: number) {
    this.taskList.splice(event, 1);
  }

  public deleteAll() {
    const confirm = window.confirm('Tem certeza?');
    if (confirm) {
      this.taskList = [];
    }
  }

  public setEmitTaskItem(event: string) {
    this.taskList.push({task: event, checked: false});
  }

  public validation(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Tarefa não pode ficar vazia, deseja deletar?');
      if (confirm) {
        this.deleteItem(index);
      } 
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }

}
