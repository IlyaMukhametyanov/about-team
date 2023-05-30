import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { EditProjectsComponent } from './edit-projects/edit-projects.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthGuard } from "../auth.guard";
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardNewsComponent } from './dashboard-news/dashboard-news.component';


@NgModule({
   imports:[
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild([
         {
            path:'', component:AdminLayoutComponent, children:[
               {path:'', redirectTo:'/admin/login', pathMatch: 'full'},
               {path: 'login', component:LoginPageComponent},
               {path: 'add-projects', component:AddProjectsComponent, canActivate: [AuthGuard]},
               {path: 'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
               {path: 'dashboard-news', component:DashboardNewsComponent, canActivate: [AuthGuard]},
               {path: 'add-news', component:AddNewsComponent, canActivate: [AuthGuard]},
               {path: 'project/:id/edit', component:EditProjectsComponent, canActivate: [AuthGuard]},
               {path: 'news/:id/edit', component:EditNewsComponent, canActivate: [AuthGuard]},
            ]
         }
      ])
   ],
   exports:[
      RouterModule
   ],
   declarations: [AdminLayoutComponent, LoginPageComponent, AddProjectsComponent, AddNewsComponent, EditProjectsComponent, EditNewsComponent, DashboardComponent, DashboardNewsComponent]
})


export class AdminModule{

}