import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  tasks: Task[] = []

  showArrey(){
    console.log(this.tasks)
  }

  appAddTasks = (value: Task[]) => {
    this.tasks = value;
  }

  // appDeleteTask = (value: Task) =>{
  //   this.tasks.splice(this.tasks.indexOf(value), 1)
  // }

}
