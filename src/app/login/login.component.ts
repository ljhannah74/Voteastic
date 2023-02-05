import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = this.fb.group({
      email: ['lewis.j.hannah@gmail.com', [Validators.required, Validators.email]],
      password: ['precious5', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngInit(): void {
  }
  
  async login() {
    console.log(this.form.value);
    const ret = await this.auth.login(this.form.value);
    console.log(ret);
  }

  async register() {
    console.log(this.form.value);
    const ret = await this.auth.createAccount(this.form.value);
    console.log(ret);
  }
}
