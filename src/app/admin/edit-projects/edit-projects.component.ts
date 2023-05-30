import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Project } from 'src/app/interfaces';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.sass']
})
export class EditProjectsComponent implements OnInit {

  form: FormGroup
  project: Project
  submitted = false

  constructor(
    private route: ActivatedRoute,
    private projectServ: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        return this.projectServ.getByID(params['id'])
      })
    ).subscribe(project => {
      this.project = project
      this.form = new FormGroup({
        title: new FormControl(this.project.title, Validators.required),
        text: new FormControl(this.project.text, Validators.required),
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
      ...this.project,
      title: this.form.value.title,
      text: this.form.value.text,
      date: new Date()
    }).subscribe(res => {
      this.form.reset()
      this.submitted = false
      this.router.navigate(['/admin', 'dashboard'])
    })
  }
}
