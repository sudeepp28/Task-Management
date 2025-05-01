import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";

import { BrowserModule } from "@angular/platform-browser";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/card/shared.module";
import { TaskModule } from "./tasks/task/tasks.module";
import { NewUserComponent } from "./user/new-user/new-user.component";
@NgModule({
    declarations:[AppComponent,HeaderComponent,
        UserComponent,
        NewUserComponent
        ],
    bootstrap:[AppComponent],
    imports: [BrowserModule, SharedModule, TaskModule, FormsModule]
})

export class AppModule{}