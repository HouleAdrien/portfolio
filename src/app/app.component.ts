import { Component, OnInit } from '@angular/core';
import {  ProjectList } from './models/projectmodel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  projects : ProjectList | undefined;

  showMenu = false;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<ProjectList>('assets/data.json').subscribe(data => {
      this.projects = data;
    });
  }

  navigateToElement(name: string) {
    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }


}
