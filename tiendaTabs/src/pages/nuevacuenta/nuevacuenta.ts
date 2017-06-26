import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { BaseDatosProvider } from '../../providers/base-datos/base-datos';
@Component({
  
  templateUrl: 'nuevacuenta.html'
})
export class NuevaCuentaPage {
nombre: [any];
apellido: [any];
email: [any];
password: [any];

usersBD: any[]=[];
  constructor(public navCtrl: NavController, private navParams: NavParams, private bdProvider: BaseDatosProvider) {
    

}

addUser(){
    let user = {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      password: this.password

    }
   this.bdProvider.createUser(user);
   alert(this.nombre+"/"+this.apellido+"/"+this.email);
  }

}