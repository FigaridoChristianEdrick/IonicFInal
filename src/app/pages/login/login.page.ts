import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

   }
   
  ngOnInit() {
  }

  signin(){
    console.log('click me');
  }
}
