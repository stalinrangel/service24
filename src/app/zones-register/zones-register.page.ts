import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-zones-register',
  templateUrl: './zones-register.page.html',
  styleUrls: ['./zones-register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ZonesRegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
