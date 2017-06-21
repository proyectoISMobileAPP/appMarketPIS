import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

/*
  Generated class for the BaseDatosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BaseDatosProvider {
productosBD: FirebaseListObservable<any>;

  constructor(private fireDatabase: AngularFireDatabase) {
    this.productosBD=this.fireDatabase.list('/productos');
  }
  getAll(){
    return this.productosBD;
  }

  create(task){
    return this.productosBD.push(task);
  }

}
