import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-view-contrat',
  templateUrl: './view-contrat.page.html',
  styleUrls: ['./view-contrat.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ViewContratPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
