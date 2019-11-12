import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../services/usuario-service.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  usuario: any = {
    idUsuario: 0,
    Nombre: '',
    Apellido: '',
    NombreUsuario : '',
    Contra: ''
  };

  constructor(private usuarioService: UsuarioServiceService, private navCtrl: NavController) { }

  ngOnInit() {
  }
  saveNewUsuario() {
    this.usuarioService.saveUsuario(this.usuario)
      .subscribe(
        res => {console.log(res);
                this.navCtrl.navigateForward('');
        },
        err => console.error(err)
      );
  }
}
