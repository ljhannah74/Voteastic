import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['lewis.j.hannah@gmail.com', [Validators.required, Validators.email]],
      password: ['precious5', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngInit(): void {
  }
  
  async login() {
    console.log(this.form.value);
    const {data, error} = await this.auth.login(this.form.value);
    console.log(error);
    if(error) {
      // TODO show error alert
    } else {
      this.router.navigateByUrl('/app', {replaceUrl: true});
    }

  }

  async register() {
    console.log(this.form.value);
    const {data, error} = await this.auth.createAccount(this.form.value);
    console.log(error);
    if(error) {
      // TODO show error alert
    } else {
      console.log(data.session);
      this.router.navigateByUrl('/app', {replaceUrl: true});
    }
  }
}
