import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListaCategoriaPage} from '../lista-categoria/lista-categoria';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  pushPage()
  {
    this.navCtrl.push(ListaCategoriaPage);
  }

}
