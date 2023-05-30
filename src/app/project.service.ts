import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FbResponse, Project } from './interfaces';
import { ProjectsComponent } from './projects/projects.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http: HttpClient
  ) { }


  create(project: any) {
    return this.http.post(`${environment.fbDbUrl}/ProjectsComponent.json`, project)
      .pipe(map((res: any) => {
        return {
          ...project,
          id: res.name,
          date: JSON.stringify(new Date(project.date)),
        }
      }))
  }
  createnews(news: any) {
    return this.http.post(`${environment.fbDbUrl}/NewsComponent.json`, news)
      .pipe(map((res: any) => {
        return {
          ...news,
          id: res.name,
          date: JSON.stringify(new Date(news.date)),
        }
      }))
  }


  getAll() {
    return this.http.get(`${environment.fbDbUrl}/ProjectsComponent.json`)
      .pipe(map((res: any) => {
        return Object.keys(res)
          .map(key => ({
            ...res[key],
            id: key,
            date: new Date(res[key].date)
          }))
      }))
  }

  getAllNews() {
    return this.http.get(`${environment.fbDbUrl}/NewsComponent.json`)
      .pipe(map((res: any) => {
        return Object.keys(res)
          .map(key => ({
            ...res[key],
            id: key,
            date: new Date(res[key].date)
          }))
      }))
  }

  getByID(id: string) {
    return this.http.get(`${environment.fbDbUrl}/ProjectsComponent/${id}.json`)
      .pipe(map((res: any) => {
        return {
          ...res,
          id,
          date: new Date(res.date)
        }
      }))
  }
  getByIDNews(id: string) {
    return this.http.get(`${environment.fbDbUrl}/NewsComponent/${id}.json`)
      .pipe(map((res: any) => {
        return {
          ...res,
          id,
          date: new Date(res.date)
        }
      }))
  }


  remove(id: any) {
    return this.http.delete(`${environment.fbDbUrl}/ProjectsComponent/${id}.json`)
  }
  removeNews(id: any) {
    return this.http.delete(`${environment.fbDbUrl}/NewsComponent/${id}.json`)
  }


  update(project: Project) {
    return this.http.patch(`${environment.fbDbUrl}/ProjectsComponent/${project.id}.json`, project)
  }

  updateNews(news: Project) {
    return this.http.patch(`${environment.fbDbUrl}/ProjectsComponent/${news.id}.json`, news)
  }

}

