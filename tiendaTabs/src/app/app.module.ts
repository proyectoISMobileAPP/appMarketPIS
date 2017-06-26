import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { CuentaPage } from '../pages/cuenta/cuenta';
import { NuevaCuentaPage } from '../pages/nuevacuenta/nuevacuenta';
import { TabsPage } from '../pages/tabs/tabs';
import {ListaCategoriaPage} from '../pages/lista-categoria/lista-categoria';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { BaseDatosProvider } from '../providers/base-datos/base-datos';

export const firebaseConfig={

    apiKey: "AIzaSyA-UG59TrVifkZvbsha8NQlt-rbPAWnHTM",
    authDomain: "proyectosoftware-553aa.firebaseapp.com",
    databaseURL: "https://proyectosoftware-553aa.firebaseio.com",
    projectId: "proyectosoftware-553aa",
    storageBucket: "proyectosoftware-553aa.appspot.com",
    messagingSenderId: "983537630680"

  };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CuentaPage,
    NuevaCuentaPage,
    TabsPage,
    ListaCategoriaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    NuevaCuentaPage,
    HomePage,
    CuentaPage,
    TabsPage,
    ListaCategoriaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BaseDatosProvider,
  ]
})
export class AppModule {}
