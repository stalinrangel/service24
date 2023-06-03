import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.page.html',
  styleUrls: ['./terms-conditions.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TermsConditionsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
