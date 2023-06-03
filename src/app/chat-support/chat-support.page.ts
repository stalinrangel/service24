import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-chat-support',
  templateUrl: './chat-support.page.html',
  styleUrls: ['./chat-support.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ChatSupportPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
