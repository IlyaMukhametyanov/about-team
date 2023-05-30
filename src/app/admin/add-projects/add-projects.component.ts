import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.sass']
})
export class AddProjectsComponent implements OnInit {

  form!: FormGroup;

  submitted = false


  constructor(
    private projectServ: ProjectService,
    private routor: Router,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      doc: new FormControl(null),
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true

    const project = {
      title: this.form.value.title,
      text: this.form.value.text,
      doc: this.form.value.doc,
      date: new Date()
    }

    console.log(this.form)
    this.projectServ.create(project).subscribe(res => {
      this.form.reset()
      this.submitted = false
      this.routor.navigate(['/admin', 'add-projects'])
    })
  }

}
