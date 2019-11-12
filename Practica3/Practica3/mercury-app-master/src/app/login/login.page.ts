import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import {  } from '../services/usuario-service.service';
import { UsuarioServiceService } from '../services/usuario-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: any = {
    idUsuario: 0,
    Nombre: '',
    Apellido: '',
    NombreUsuario : '',
    Contra: ''
  };

  constructor(public navCtrl: NavController, public toastController: ToastController, private usuarioService: UsuarioServiceService) { }

  ngOnInit() {
  }

  async InicioSesion(email: string, password: string) {
    if (email === undefined || password === undefined) {
      const toast = await this.toastController.create({
        message: 'Uno o más campos estan vacíos. Verificar datos.',
        duration: 2000
      });
      toast.present();

    } else if (email === 'admin' && password === 'admin') {
      this.navCtrl.navigateForward('/home-page/edituser');
    } else {
      this.usuarioService.loginUsuario(this.usuario.NombreUsuario, this.usuario.Contra)
      .subscribe(
        res => {console.log(res);
                this.usuario = res;
                this.navCtrl.navigateForward('/home-tabs/inbox/' + this.usuario.NombreUsuario);
        },
        err => console.error(err)
      );
    }
  }

}
