import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-finish-register',
  templateUrl: './finish-register.page.html',
  styleUrls: ['./finish-register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FinishRegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
