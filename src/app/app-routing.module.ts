import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsComponent } from './news/news.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamComponent } from './team/team.component';
import { VacancyComponent } from './vacancy/vacancy.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent, children:[
      {path:'',redirectTo:'/',pathMatch:'full'},
      {path:'', component:HomePageComponent},
      {path:'news', component:NewsComponent,},
      {path:'projects', component:ProjectsComponent},
      {path:'project/:id', component:ProjectComponent},
      {path:'team', component:TeamComponent},
      {path:'vacancy', component:VacancyComponent}
    ]
  },
  {path:'admin',loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
