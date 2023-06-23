import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-chat-pedidos',
  templateUrl: './chat-pedidos.page.html',
  styleUrls: ['./chat-pedidos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ChatPedidosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
