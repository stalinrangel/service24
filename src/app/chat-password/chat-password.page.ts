import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-chat-password',
  templateUrl: './chat-password.page.html',
  styleUrls: ['./chat-password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ChatPasswordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
