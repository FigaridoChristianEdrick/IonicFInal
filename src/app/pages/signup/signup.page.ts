import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  name: string = "";
  username: string = "";
  password: string = "";
  confirm: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

   
  ngOnInit() {
  }
  
}
