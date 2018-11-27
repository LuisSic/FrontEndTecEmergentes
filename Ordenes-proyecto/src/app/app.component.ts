import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  socket;
  title = 'Ordenes-proyecto';
  constructor() {
    this.socket = io('http://40.121.134.152:3000/');
  }

  ngOnInit() {
    this.socket.on('NewPedidoAdded', () => {
      console.log('Mandar a pedir pedidos');
    });
  }
}
