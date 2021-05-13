import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tasks: Task[] = []
  
  @Output() taskEventEmitter = new EventEmitter<Task[]>()

  addTasks(){
    this.taskEventEmitter.emit(this.tasks);
  }

  appAddTask = (value: Task) => {
    this.tasks.push(value);
    this.addTasks();
  }

  appDeleteTask = (value: Task) =>{
    this.tasks.splice(this.tasks.indexOf(value), 1)
    this.addTasks();
  }

}
