import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  productos=[{prodName:"leche",precio:"6.50",imagen:"assets/img/leche.jpg"},
             {prodName:"salchicha",precio:"10.00",imagen:"assets/img/salchicha.jpg"},
             {prodName:"naranja",precio:"8.50",imagen:"assets/img/naranja.jpg"}];
  constructor(public navCtrl: NavController) {

  }

}
