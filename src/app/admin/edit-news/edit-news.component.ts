import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Project } from 'src/app/interfaces';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.sass']
})
export class EditNewsComponent implements OnInit {

  form: FormGroup
  new: Project
  submitted = false


  constructor(
    private route: ActivatedRoute,
    private projectServ: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        return this.projectServ.getByIDNews(params['id'])
      })
    ).subscribe(news => {
      this.new = news
      this.form = new FormGroup({
        title: new FormControl(this.new.title, Validators.required),
        text: new FormControl(this.new.text, Validators.required),
      })
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true


    console.log(this.form)
    this.projectServ.update({
      ...this.new,
      title: this.form.value.title,
      text: this.form.value.text,
      date: new Date()
    }).subscribe(res => {
      this.form.reset()
      this.submitted = false
      this.router.navigate(['/admin', 'dashboard-news'])
    })
  }


}
