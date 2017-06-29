import { Component } from '@angular/core';
import { BaseDatosProvider } from '../../providers/base-datos/base-datos';
import { NavController, AlertController, NavParams, LoadingController } from 'ionic-angular';
import { CuentaPage } from '../cuenta/cuenta';
import { HomePage } from '../home/home';
import { NuevaCuentaPage } from '../nuevacuenta/nuevacuenta';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public loginForm;
  emailChanged: boolean = false;
  passwordChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;
constructor(public navCtrl: NavController, public authService: BaseDatosProvider, public navParams: NavParams, public formBuilder: FormBuilder,public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  elementChanged(input){
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }
//redirecciona pagina de registro
  register(){
    this.navCtrl.push(NuevaCuentaPage);
  }

  resetPwd(){
   // this.navCtrl.push(ResetpwdPage);
  }
//iniciar sesion
  loginUser(){
    this.submitAttempt = true;

    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authService.doLogin(this.loginForm.value.email, this.loginForm.value.password).then( authService => {
        this.navCtrl.push(CuentaPage);
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }
  //nos redireccion pagina de registro
  pushToNewUser(){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(NuevaCuentaPage,{
      
    });
  }
}