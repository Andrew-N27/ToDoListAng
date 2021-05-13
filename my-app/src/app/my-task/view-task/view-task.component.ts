import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor() { }
  @Input()  task: Task = new Task(0,'','',false);
  @Output() taskEventEmitter = new EventEmitter<Task>()
  
  someComplete(): void {
    this.task.isCompleted = !this.task.isCompleted;
  }

  deleteTask(){
    this.taskEventEmitter.emit(this.task)
  }

  ngOnInit(): void {
  }

}
