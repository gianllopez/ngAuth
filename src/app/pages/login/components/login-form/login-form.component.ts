import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../../../form.component.scss']
})
export class LoginFormComponent implements OnInit {

  showpwd = false;

  constructor() { }

  ngOnInit(): void {
  }

}
