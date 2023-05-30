import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.sass']
})
export class AddNewsComponent implements OnInit {

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
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true

    const news = {
      title: this.form.value.title,
      text: this.form.value.text,
      date: new Date()
    }

    console.log(this.form)
    this.projectServ.createnews(news).subscribe(res => {
      this.form.reset()
      this.submitted = false
      this.routor.navigate(['/admin', 'add-news'])
    })
  }
}
