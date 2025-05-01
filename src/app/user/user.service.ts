import { Injectable } from "@angular/core";
import { DUMMY_USERS } from "../dummy_users";


@Injectable({providedIn:"root"})
export class Userservice{

    private users=DUMMY_USERS;

    addnewUser(name:string){
        this.users.push({
            id:(+this.users[this.users.length-1].id+1).toString(),
            name:name,
            avatar:name
        })

    }
}