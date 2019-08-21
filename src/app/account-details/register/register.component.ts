import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/services/user-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  email: String;
  password: String;
  rPassword: String;

  constructor(private router: Router, private loginService: UserAuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    let user = new User(this.username, this.email, this.password);
    this.loginService.registerUser(user).subscribe(response => console.log(response));

  }
}
