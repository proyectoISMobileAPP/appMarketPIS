import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { BaseDatosProvider } from '../../providers/base-datos/base-datos';
@Component({
  
  templateUrl: 'cuenta.html'
})
export class CuentaPage {
usersBD: any[]=[];
  constructor(public navCtrl: NavController, private navParams: NavParams, private bdProvider: BaseDatosProvider) {
     let id = navParams.get('id');
     let name = navParams.get('name');

}


}