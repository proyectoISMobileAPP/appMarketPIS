import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CuentaPage } from '../cuenta/cuenta';
import { NuevaCuentaPage } from '../nuevacuenta/nuevacuenta';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
pushPage(){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(CuentaPage,{
      id: "123",
      name: "Carl"
    });
  }

pushToNewUser(){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(NuevaCuentaPage,{
      
    });
  }

}
