import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';
//import { ChatComponent } from '../components/chat/chat.component';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket: any;

  //server = "http://localhost:3000";
  server = "";

  constructor() {
    this.socket = io.io(this.server)
  }

  listen(eventName: String){
    return new Observable((Subscriber) => {
      this.socket.on(eventName, (data: any) => {
        Subscriber.next(data);
      })
    })
  }

  emit(eventName: String, data: any){
    this.socket.emit(eventName, data);
  }
}
