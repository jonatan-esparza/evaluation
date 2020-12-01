import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit, AfterViewInit {

  userChat = {
    id: '',
    user: '',
    message: ''
  }

  myMessages: any;
  eventName = "send-message";

  @ViewChild("scrollchat")
  scrollchat!: ElementRef;

  constructor(private activated : ActivatedRoute, private webservice: WebSocketService) { }

  ngOnInit(): void {
    const id = this.activated.snapshot.params.id;
    this.userChat.id = id;

    const user = this.activated.snapshot.params.user;
    this.userChat.user = user;

    this.webservice.listen('text-event').subscribe((data: any) => {
      this.myMessages = data;
      this.updateChat();
    });
  }

  ngAfterViewInit(){
    this.updateChat();
  }

  sendMessage(){
    if(this.userChat.message != ""){
      this.webservice.emit(this.eventName, this.userChat);
      this.userChat.message = '';
      this.updateChat();
    }
  }

  updateChat(){
    this.scrollchat.nativeElement.scrollTop = this.scrollchat.nativeElement.scrollHeight;
  }
}