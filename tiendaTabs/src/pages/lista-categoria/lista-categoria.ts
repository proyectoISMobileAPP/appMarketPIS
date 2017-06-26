import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { BaseDatosProvider } from '../../providers/base-datos/base-datos';
//import { BdSqlProvider } from '../../providers/bd-sql/bd-sql';

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
carrito: any[] = [];
categorias=[{name: "Lacteos",productos:[{prodName:"leche",precio:"6.50",imagen:"assets/img/leche.jpg"},{prodName:"yogurt",precio:"10.00",imagen:""},{prodName:"queso",precio:"8.50",imagen:""}]},
              {name: "Carnes",productos:[{prodName:"Pollo",precio:"12.50",imagen:"assets/img/carnes.jpg"},{prodName:"Res",precio:"18.00",imagen:""},{prodName:"Chorizo",precio:"25.00",imagen:""}]},
              {name: "Frutas",productos:[{prodName:"Piña",precio:"6.00",imagen:"assets/img/frutasyverduras.jpg"},{prodName:"Naranja",precio:"0.50",imagen:""},{prodName:"Manzana",precio:"2.50",imagen:""}]}];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private bdProvider: BaseDatosProvider,
              private alertCtrl: AlertController,
              /*private bdSQLProvider: BdSqlProvider*/) {
    this.catSel=navParams.get("catSeleccionada");
    console.log("categoria seleccionada:"+this.catSel);
    this.buscar();
  }

  ionViewDidLoad() {
    this.bdProvider.getAll()
    .subscribe(productosBD =>{
      this.productosBD = productosBD;
    });
  }
   buscar() {
        switch (this.catSel) 
    { 
    case'Lacteos': 
      this.productos=[{prodName:"leche",precio:"6.50",imagen:"assets/img/leche.jpg"},{prodName:"yogurt",precio:"10.00",imagen:"assets/img/yogurt.jpg"},{prodName:"queso",precio:"8.50",imagen:"assets/img/queso.jpg"}];
      break; 
    case'Carnes':  
      this.productos=[{prodName:"Pollo",precio:"12.50",imagen:"assets/img/pollo.jpg"},{prodName:"Res",precio:"18.00",imagen:"assets/img/res.jpg"},{prodName:"Salchicha",precio:"25.00",imagen:"assets/img/salchicha.jpg"}];
      break;
    case'Frutas':  
      this.productos=[{prodName:"Piña",precio:"6.00",imagen:"assets/img/pina.jpg"},{prodName:"Naranja",precio:"0.50",imagen:"assets/img/naranja.jpg"},{prodName:"Manzana",precio:"2.50",imagen:"assets/img/manzana.jpg"}];
      break; 
    default: 
      alert("Error categoria"); 
    } 
        
  }
  anadirCarrito(nombre,precio)
  {
      alert("Producto "+nombre+"; Precio "+precio+"; Cantidad "+this.value);
  }
  showAlert(){
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
         {
          name: 'categoria',
          placeholder: "categoria"
        }
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
            this.createProduct(data.codigoProd,data.nombre,data.precio,data.categoria);
          }
        }
      ]
    });
    alert.present();
  }
  private createProduct(codigoProd: string,nombre: string,precio: string,categoria: string){
    let newProduct = {
      codigoProd: codigoProd,
      nombre: nombre,
      precio: precio,
      categoria:categoria
    }
    this.bdProvider.create(newProduct);
  }
  /*private createPC(idProd: string,nombre: string,precio: string,cantidad: number,categoria: string){
    let newPC = {
      idProducto: idProd,
      nombre: nombre,
      precio: precio,
      cantidad:cantidad,
      categoria:categoria
    }
    this.bdSQLProvider.create(newPC)
    .then((data) =>{
      this.carrito.unshift(newPC);
      console.log(data.rows.item(data.insertId));
    })
    .catch(error =>{
      console.error(error);
    })
  }*/
  
}
