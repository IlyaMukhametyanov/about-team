import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {

  news$: any

  constructor(
    private projectServ: ProjectService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.news$ = this.projectServ.getAllNews()
  }

}
