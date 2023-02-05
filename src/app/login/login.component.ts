import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['lewis.j.hannah@gmail.com', [Validators.required, Validators.email]],
      password: ['precious5', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngInit(): void {
  }
  
  login() {
    console.log(this.form.value);
  }
}
