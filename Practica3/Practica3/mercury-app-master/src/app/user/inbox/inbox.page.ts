import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  active_user = '';
  chats;
  constructor(public navCtrl: NavController, private activatedRoute: ActivatedRoute, private chatService: ChatService) { }

  OpenMessage(chat: any): void {
   /* if (this.chats[i].UsuarioEnvio == this.active_user) {
      this.user = this.chats[i].UsuarioReceptor;
    } else {
      this.user = this.chats[i].UsuarioEnvio;
    }*/
    this.navCtrl.navigateForward('/message/' + this.active_user + '/' + chat.idChat );
  }
  getChats() {
    this.chatService.getChats(this.active_user)
    .subscribe(
      res => {this.chats = res;
              console.log(res);
      },
      err => console.error(err)
    );
  }

  ngOnInit() {
    this.active_user = this.activatedRoute.snapshot.paramMap.get('active_user');
    console.log(this.active_user);
    this.getChats();
  }

}
