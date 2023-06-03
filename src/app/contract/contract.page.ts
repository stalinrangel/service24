import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.page.html',
  styleUrls: ['./contract.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContractPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
