import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-camera-preview',
  templateUrl: './camera-preview.page.html',
  styleUrls: ['./camera-preview.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CameraPreviewPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
