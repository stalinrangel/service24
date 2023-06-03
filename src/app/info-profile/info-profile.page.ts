import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-info-profile',
  templateUrl: './info-profile.page.html',
  styleUrls: ['./info-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InfoProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
