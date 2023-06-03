import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-confirm-info',
  templateUrl: './confirm-info.page.html',
  styleUrls: ['./confirm-info.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConfirmInfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
