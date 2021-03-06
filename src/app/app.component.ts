import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class RootComponent {
  title = 'welcome to angular2!';

  constructor(
    private router :Router
  ){

  }

  findMore():void{
    this.router.navigate(['/interviewer']);
  }

  goBack():void{
    this.router.navigate(['/']);
  }
}
