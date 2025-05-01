import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy_users';


DUMMY_USERS

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users=DUMMY_USERS;
  selectedUserId?:string;

  get selectedUser(){
    return this.users.find((user)=>user.id===this.selectedUserId)!;
  }

  onSelectUser(id:string){
    this.selectedUserId=id;
  }

  isNewUser=false
  onAddNewUser(){
    this.isNewUser=!this.isNewUser
  }
  OncancelAddNewUser(){
    this.isNewUser=!this.isNewUser
  }
}
