import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form:FormGroup;
  
  constructor(private fb:FormBuilder, private authService: AuthService, private router: Router) {

    this.form = this.fb.group({
      login: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  login() {
    const val = this.form.value;
    console.log("appui");
    if (val.login && val.password) {
        this.authService.login(val.login, val.password)
            .subscribe(
                () => {
                    console.log("User is logged in");
                    this.router.navigateByUrl('/centers');
                }
            );
    }
  }
  
}
