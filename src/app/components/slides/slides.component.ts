import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {

  slideoptions = {
    initialSlide: 1,
    speed: 400
  }
  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToLoginPage(){
    this.router.navigate(['login']);
  }
  navigateToSignUpPage(){
    this.router.navigate(['signup']);
  }
  
}

