import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';

/*
  Generated class for the BdSqlProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BdSqlProvider {
dbsql: SQLiteObject = null;
  constructor(public http: Http) {
    console.log('Hello BdSqlProvider Provider');
  }
  setDatabase(database){
    if(this.dbsql === null){
      this.dbsql = database;
    }
  }
  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS pedidos(idProducto TEXT, nombre TEXT, precio INTEGER, cantidad INTEGER,categoria TEXT)';
    return this.dbsql.executeSql(sql, []);
  }
  getAll(){
    let sql = 'SELECT * FROM pedidos';
    return this.dbsql.executeSql(sql, [])
    .then(response =>{
      let tasks = [];
      for (let index = 0; index < response.rows.length; index++) {
        tasks.push( response.rows.item(index) );
      }
      return Promise.resolve(tasks);
    })
    .catch(error => Promise.reject(error) )
  }
  create(pedido){
    let sql = 'INSERT INTO pedidos(idProducto,nombre,precio,cantidad,categoria) VALUES(?,?,?,?,?)';
    return this.dbsql.executeSql(sql, [pedido.idProducto,pedido.nombre,pedido.precio,pedido.cantidad,pedido.categoria])
  }
  update(pedido){
    let sql = 'UPDATE pedidos SET nombre=?, precio=?, cantidad=? WHERE idProducto=?';
    return this.dbsql.executeSql(sql, [pedido.nombre,pedido.precio,pedido.cantidad,pedido.idProducto]);
  }

  delete(idProducto: number){
    let sql = 'DELETE FROM pedidos WHERE id=?';
    return this.dbsql.executeSql(sql, [idProducto]);
  }

}
