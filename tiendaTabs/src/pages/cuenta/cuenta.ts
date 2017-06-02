import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  
  templateUrl: 'cuenta.html'
})
export class CuentaPage {

  constructor(public navCtrl: NavController, private navParams: NavParams) {
     let id = navParams.get('id');
     let name = navParams.get('name');  
}

}