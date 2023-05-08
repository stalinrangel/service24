import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-detail-tracking',
  templateUrl: './detail-tracking.page.html',
  styleUrls: ['./detail-tracking.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailTrackingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
