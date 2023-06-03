import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.page.html',
  styleUrls: ['./contrasena.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContrasenaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
