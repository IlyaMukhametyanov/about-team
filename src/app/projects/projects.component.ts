import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  projects$: any

  constructor(
    private projectServ:ProjectService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.projects$ = this.projectServ.getAll()
  }

}


