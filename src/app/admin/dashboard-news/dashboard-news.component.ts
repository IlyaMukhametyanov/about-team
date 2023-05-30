import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-dashboard-news',
  templateUrl: './dashboard-news.component.html',
  styleUrls: ['./dashboard-news.component.sass']
})
export class DashboardNewsComponent implements OnInit {

  news: any = []
  pSub: Subscription | undefined
  rSub: Subscription | undefined

  constructor(
    private projectsServ: ProjectService,
  ) { }

  ngOnInit(): void {
    this.pSub = this.projectsServ.getAllNews().subscribe(news => {
      console.log(news)
      this.news = news
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
    this.rSub = this.projectsServ.removeNews(id).subscribe(() => {
      this.news = this.news.filter(news => news.id !== id)
    })
  }

}
