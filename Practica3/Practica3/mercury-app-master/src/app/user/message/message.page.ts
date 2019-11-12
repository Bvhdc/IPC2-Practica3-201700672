import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MensajeService  } from '../../services/mensaje.service';
import { UsuarioServiceService } from '../../services/usuario-service.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  contact = '';
  active_user = '';
  completeUser;
  mensajes;
  mensajenuevo: any = {
    idMensaje: 0,
    contenido: '',
    estado: 'enviado',
    idChat : this.contact,
    UsuarioEnvio: this.active_user
  };
  navCtrl: any;
  constructor(private activatedRoute: ActivatedRoute, private mensajeService: MensajeService
    ,         private usuarioService: UsuarioServiceService) { }

  ngOnInit() {
    this.active_user = this.activatedRoute.snapshot.paramMap.get('active_user');
    this.contact = this.activatedRoute.snapshot.paramMap.get('username');
    this.getMensajes();
    this.mensajenuevo.UsuarioEnvio = this.active_user;
    this.mensajenuevo.idChat = this.contact;
  }
  createMensajes() {
    this.usuarioService.getUsuario(this.active_user)
      .subscribe(
        res => {this.completeUser = res;
        },
        err => console.error(err)
      );
    this.mensajeService.createMensaje(this.completeUser.idUsuario, this.mensajenuevo)
      .subscribe(
        res => {console.log(res);
        },
        err => console.error(err)
      );
  }
  usuario(usuario: any) {
    throw new Error('Method not implemented.');
  }
  getMensajes() {
   this.mensajeService.getMensajes(this.contact)
      .subscribe(
        res => {
                this.mensajes = res;
                console.log(this.mensajes);
        },
        err => console.error(err)
      );
  }

  sendMessage(input: string): void {
    alert(input);
    // metodo enviar mensaje
  }

}
