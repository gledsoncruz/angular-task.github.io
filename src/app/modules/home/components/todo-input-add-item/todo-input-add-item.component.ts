import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-item',
  templateUrl: './todo-input-add-item.component.html',
  styleUrls: ['./todo-input-add-item.component.scss']
})
export class TodoInputAddItemComponent {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItem: string = '';

  public submitItem() {

    this.addItem = this.addItem.trim();

    if (this.addItem) {
      this.emitItemTaskList.emit(this.addItem);
      this.addItem = '';
    }
  }

}
