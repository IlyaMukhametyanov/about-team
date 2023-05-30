import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {


  project$:any

  constructor(
    private projectServ:ProjectService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.project$ = this.route.params
    .pipe(switchMap(params=> {
      return this.projectServ.getByID(params['id'])
    }))
  }

}
