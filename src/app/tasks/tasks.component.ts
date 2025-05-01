import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
@Component({
  selector: 'app-tasks',
  standalone:false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name?:string ; 
  @Input({required:true}) userId!:string;

    isAddingTask =false;
    
 constructor(private tasksService:TasksService){
 
 }

  get selectedUserTask(){
   return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id:string){
  //   this.tasksService.removeTask(id);
  // }
  
  onStartaddTask(){
    this.isAddingTask=true;
  }

  onCloseAddTask(){
    this.isAddingTask=false;
  }


 
 
}
