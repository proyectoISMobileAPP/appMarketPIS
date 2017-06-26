import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

/*
  Generated class for the BaseDatosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BaseDatosProvider {
productosBD: FirebaseListObservable<any>;
public fireAuth: any;
public userData: any;
  constructor(private fireDatabase: AngularFireDatabase) {
    this.productosBD=this.fireDatabase.list('/productos');
    this.fireAuth = firebase.auth();
    this.userData = firebase.database().ref('/usuarios');
  }
  getAll(){
    return this.productosBD;
  }

  create(task){
    return this.productosBD.push(task);
  }
  doLogin(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string): any {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((newUser) => {
        this.userData.child(newUser.uid).set({email: email});
      });
  }

  resetPassword(email: string): any {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  doLogout(): any {
    return this.fireAuth.signOut();
  }


}
