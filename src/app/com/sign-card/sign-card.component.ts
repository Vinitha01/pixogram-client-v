import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sign-card',
  templateUrl: './sign-card.component.html',
  styleUrls: ['./sign-card.component.css']
})
export class SignCardComponent implements OnInit {

  @Input()
  invalidLogin: boolean;

  constructor() { }

  ngOnInit() {
  }

}
