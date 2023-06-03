import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-verify-number',
  templateUrl: './verify-number.page.html',
  styleUrls: ['./verify-number.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class VerifyNumberPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
