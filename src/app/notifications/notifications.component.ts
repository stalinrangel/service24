import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalController, LoadingController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { UserService } from '../services/user.service';
import { StorageService } from '../services/storage.service';
import { RefreshService } from '../services/refresh.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, FormsModule, ReactiveFormsModule]
})
export class NotificationsComponent  implements OnInit {

  public datos: any;
  public datos1: any;
  public notifications: any;
  public showEmpty: boolean = false;
  //private subscription: Subscription;
  public loaded = false;

  constructor(
  	public modalCtrl: ModalController,
    public userService: UserService, 
    private storage: StorageService, 
    public refresh: RefreshService,
  ) { 
    /*this.subscription = this.refresh.formRefreshSource3$.subscribe((msg:any) => {
      this.getZone();
    });*/
    this.getZone();
    this.storage.set('notifyGPROVSV24', '0');
  }

  ngOnInit() {}

  ionViewWillLeave() {
    //this.subscription.unsubscribe();
  }

  getZone(){
      //this.storage.getObject('userRPSV24').then(items => {
      let items:any;
      if (items) {
        this.storage.get('TRPSV24').then(items2 => {
          if (items2) {
            this.userService.getCity(items.id,items2).subscribe(
            data => {
              this.datos = data;
              this.getNotify(this.datos.ciudad_id, items.id);
            },
            msg => {
              this.notifications = [];
              this.showEmpty = true;
            });
          }
        });
      } else {
        this.notifications = [];
        this.showEmpty = true;
      }
    //});  
  }

  getNotify(ciudad_id:any, user_id:any){
    this.storage.get('TRPSV24').then(items2 => {
      if (items2) {
        this.userService.getNotifications(ciudad_id,items2, user_id).subscribe(
        data => {
          console.log(data)
          this.datos1 = data;
          this.notifications = this.datos1.Notificaciones_generales;
          if (this.notifications.length == 0) {
            this.showEmpty = true;
          }
        },
        msg => {
          this.notifications = [];
          this.showEmpty = true;
        });
      } else {
        this.notifications = [];
        this.showEmpty = true;
      }
    });  
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
