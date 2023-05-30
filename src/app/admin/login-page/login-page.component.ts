import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  submitted = false
  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true

    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true,
    }

    this.auth.login(user).subscribe(res => {
      console.log(res)
      this.form.reset

      this.router.navigate(['admin', 'add-news'])
      this.submitted = false
    }, () => {
      this.submitted = false
    })
  }

  constructor(
    public auth: AuthService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

}
