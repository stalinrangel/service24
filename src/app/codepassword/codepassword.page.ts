import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-codepassword',
  templateUrl: './codepassword.page.html',
  styleUrls: ['./codepassword.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CodepasswordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
