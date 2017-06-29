import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { BaseDatosProvider } from '../../providers/base-datos/base-datos';

/**
 * Generated class for the ListaCategoriaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lista-categoria',
  templateUrl: 'lista-categoria.html',
})
export class ListaCategoriaPage {
public catSel;
public seleccionados;  
catProd:[any];
productos:[any];
value:number=0;
productosBD: any[]=[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private bdProvider: BaseDatosProvider,
              private alertCtrl: AlertController) {
    this.catSel=navParams.get("catSeleccionada");
    console.log("categoria seleccionada:"+this.catSel);
    this.buscar();
  }
//carga y realiza conexion base de datos firebase
  ionViewDidLoad() {
    this.bdProvider.getAll()
    .subscribe(productosBD =>{
      this.productosBD = productosBD;
    });
  }
//iltra productos por categoria
   buscar() {
        switch (this.catSel) 
    { 
    case'Lacteos': 
      this.productos=[{codProd:"prod00001",prodName:"leche",precio:"6.50",imagen:"assets/img/leche.jpg",categoria:"lacteos"},
      {codProd:"prod00002",prodName:"yogurt",precio:"10.00",imagen:"assets/img/yogurt.jpg",categoria:"lacteos"},
      {codProd:"prod00003",prodName:"queso",precio:"8.50",imagen:"assets/img/queso.jpg",categoria:"lacteos"}];
      break; 
    case'Carnes':  
      this.productos=[{codProd:"prod00004",prodName:"Pollo",precio:"12.50",imagen:"assets/img/pollo.jpg",categoria:"carnes"},
      {codProd:"prod00005",prodName:"Res",precio:"18.00",imagen:"assets/img/res.jpg",categoria:"carnes"},
      {codProd:"prod00006",prodName:"Salchicha",precio:"25.00",imagen:"assets/img/salchicha.jpg",categoria:"carnes"}];
      break;
    case'Frutas':  
      this.productos=[{codProd:"prod00007",prodName:"Piña",precio:"6.00",imagen:"assets/img/pina.jpg",categoria:"frutas"},
      {codProd:"prod00008",prodName:"Naranja",precio:"0.50",imagen:"assets/img/naranja.jpg",categoria:"frutas"},
      {codProd:"prod00009",prodName:"Manzana",precio:"2.50",imagen:"assets/img/manzana.jpg",categoria:"frutas"}];
      break; 
    default: 
      alert("Error categoria"); 
    } 
        
  }
  /*showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Agregar una producto',
      message: 'Introduzca el nuevo producto',
      inputs: [
        {
          name: 'codigoProd',
          placeholder:"Codigo Del Producto"
        },
        {
          name: 'nombre',
          placeholder: "Nombre"
        },
        {
          name: 'precio',
          placeholder: "Precio"
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=>{
            console.log('Click en cancelar');
          }
        },
        {
          text: 'Guardar',
          handler: (data)=>{
            this.createProduct(data.codigoProd,data.nombre,data.precio);
          }
        }
      ]
    });
    alert.present();
  }*/
  //anade productos al carrito
  private addPedido(codProd: string,nombre: string,precio: string,categoria:string){
    let newProduct = {
      codigoProd: codProd,
      nombre: nombre,
      precio: precio,
      categoria:categoria,
      cantidad:this.value
    }
    this.bdProvider.create(newProduct);
  }
  
}
