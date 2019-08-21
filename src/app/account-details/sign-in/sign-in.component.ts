import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserAuthService } from 'src/services/user-auth.service';
import { Router } from '@angular/router';
import { User } from 'src/model/user';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username: String;
  password: String;
  invalidLogin: boolean = false;
  users: User[];

  constructor(private router: Router, private loginService: UserAuthService) { }

  ngOnInit() {
    this.loginService.getUsers().subscribe(response => this.users = response, error => alert(`${error.message}\nWaiting for response from server`));
  }

  checkLogin() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].name === this.username && this.users[i].password === this.password) {
        this.router.navigate(['my-media-page']);
        this.invalidLogin = false;
        localStorage.setItem("userId", this.users[i].id.toString());
      } else {
        this.invalidLogin = true;
      }
    }

  }

  onSubmit() {
    this.checkLogin();
  }
}
