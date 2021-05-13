import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() { }

  cout: number = 0;
  @Output() taskEventEmitter = new EventEmitter<Task>()

  addTask(nTask :NgForm ){
    this.taskEventEmitter.emit(new Task(this.cout += 1, nTask.value.textTask, new Date().toLocaleString(), false));
  }

  ngOnInit(): void {
  }

}
