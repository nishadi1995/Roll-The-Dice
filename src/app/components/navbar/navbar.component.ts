import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InitComponent } from '../init/init.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router : Router) { }

  ngOnInit() {
  }

  onNew(){
    console.log("new");
    this.router.navigate(['game']);

  }

}
