import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']})
export class HomePageComponent implements OnInit {

  constructor(private api: ApiService, private title: Title) {};

  name!: string;

  ngOnInit(): void {
    this.title.setTitle('ngAuth - Home');
    this.api.verifyHash((res: any) => {
      if (res.valid) this.name = res.name; });     
  };

};
