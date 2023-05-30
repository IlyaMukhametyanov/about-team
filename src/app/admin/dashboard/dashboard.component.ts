import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/interfaces';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  projects: any = []
  pSub: Subscription | undefined
  rSub: Subscription | undefined

  constructor(
    private projectsServ: ProjectService,
  ) { }

  ngOnInit(): void {
    this.pSub = this.projectsServ.getAll().subscribe(projects => {
      console.log(projects)
      this.projects = projects
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe
    }

    if (this.rSub) {
      this.rSub.unsubscribe
    }
  }


  remove(id) {
    this.rSub = this.projectsServ.remove(id).subscribe(() => {
      this.projects = this.projects.filter(project => project.id !== id)
    })
  }
}
