import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListaCategoriaPage} from '../lista-categoria/lista-categoria';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  categorias=[{name: "Lacteos",image: "assets/img/lacteos.jpg"},
              {name: "Carnes",image: "assets/img/carnes.jpg"},
              {name: "Frutas",image: "assets/img/frutasyverduras.jpg"}];
  constructor(public navCtrl: NavController) {
  }
  
  pushPage()
  {
    this.navCtrl.push(ListaCategoriaPage);
  }

}
