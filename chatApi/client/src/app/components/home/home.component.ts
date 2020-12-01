import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  User = {
    name: 'Usuario' + this.randomNick(),
    id: this.randomId()
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  randomNick() {
    let possible = "1234567890";
    let text = "";
    for (let i = 0; i < 6; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      return text;
  }

  randomId() {
    let possible = "abcdefghijklmnopqrstuvwxyz1234567890";
    let text = "";
    for (let i = 0; i < 15; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
      return text;
  }

}