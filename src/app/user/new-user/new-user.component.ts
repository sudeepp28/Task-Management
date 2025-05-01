import { Component, EventEmitter, Output } from '@angular/core';
import { Userservice } from '../user.service';

@Component({
  selector: 'app-new-user',
  standalone:false,
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
 constructor(private userService:Userservice){}
@Output() close= new EventEmitter()
 EnteredName:string="";
 onSubmit(){
  this.userService.addnewUser(this.EnteredName)
  this.close.emit()
 }
 onClose(){
  this.close.emit()
 }
}
