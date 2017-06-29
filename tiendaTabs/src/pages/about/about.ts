import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BaseDatosProvider } from '../../providers/base-datos/base-datos';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  productosBD: any[]=[];
  constructor(public navCtrl: NavController,
              private bdProvider: BaseDatosProvider) {

  }
  //cargamos base de datos de firebase para usarla en el html
  ionViewDidLoad() {
    this.bdProvider.getAll()
    .subscribe(productosBD =>{
      this.productosBD = productosBD;
    });
  }

}
