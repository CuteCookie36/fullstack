import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

    constructor(private loginService: LoginService, private router: Router) {}

    ngOnInit(): void {
    }

    onSubmit(): void {
      console.log("click button");
      // console.log("username1 = " + this.username);
      // console.log("password1 = " + this.password);
      this.loginService.connect(this.username, this.password).subscribe(() => {
        this.router.navigate(["centers"])
      });
    } 
      

    


}

