import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../interfaces';

@Component({
  selector: 'app-project-l',
  templateUrl: './project-l.component.html',
  styleUrls: ['./project-l.component.sass']
})
export class ProjectLComponent implements OnInit {

@Input() project: any

  constructor() { }

  ngOnInit(): void {
  }

}
