import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './my-task/add-task/add-task.component';
import { ViewTaskComponent } from './my-task/view-task/view-task.component';
import { MyTaskComponent } from './my-task/my-task.component';

const routes: Routes = [
  //{path: '', component: AppComponent},
  {path: 'myTask', component: MyTaskComponent},
  {path: 'addTask', component: AddTaskComponent},
  {path: 'viewTask', component: ViewTaskComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
