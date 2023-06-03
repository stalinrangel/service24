import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-zones-service',
  templateUrl: './zones-service.page.html',
  styleUrls: ['./zones-service.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ZonesServicePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
