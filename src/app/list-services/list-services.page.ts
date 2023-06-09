import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController, ToastController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { OrdersService } from '../services/orders.service';
import { ObjetcserviceService } from '../services/objetcservice.service';


@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.page.html',
  styleUrls: ['./list-services.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ListServicesPage implements OnInit {

  
	public datos: any;
	public services: any;
	public loading:any;

  constructor(
  	public navCtrl: NavController,
  	public storage: StorageService,
  	public orderService: OrdersService,
  	private toastCtrl: ToastController,
  	public actionSheetController: ActionSheetController,
  	private loadingController: LoadingController,
  	private objService: ObjetcserviceService,
  	private alertController: AlertController
  ) { }

  ngOnInit() {
  	
  }

  ionViewDidEnter() {
    this.getServices();
  }

  getServices(){
  	let items:any=this.storage.get('userRPSV24')
		if (items) {
			let items2:any=this.storage.get('TRPSV24')
	  			if (items2) {
	  				let id = JSON.parse(items).establecimiento.id;
	  				this.orderService.getServices(id,items2).subscribe(
			        data => {
				      this.datos = data;
				      this.services = this.datos.productos;
				      this.services = this.sortByKey(this.services,'nombre');
				    },
				    msg => {
				      if(msg.status == 400 || msg.status == 401){ 
				      	this.storage.set('TRPSV24','');
				        this.presentToast(msg.error.error + ', Por favor inicia sesión de nuevo');
				        this.navCtrl.navigateRoot('login');
				      }
				    });
	  			}
		}
  }

  deleteServices(item:any){
  	this.storage.get('TRPSV24').then(items2 => {
		if (items2) {
			this.presentLoading();
			this.orderService.deleteService(item.id,items2).subscribe(
	        data => {
	        	this.loading.dismiss();
	        	this.presentToast('Se ha eliminado correctamente el servicio.')
		      	this.getServices();
		    },
		    msg => {
		    	this.loading.dismiss();
				if(msg.status == 400 || msg.status == 401){ 
					this.storage.set('TRPSV24','');
					this.presentToast(msg.error.error + ', Por favor inicia sesión de nuevo');
					this.navCtrl.navigateRoot('login');
				}
		    });
		}
	});	
  }

  addService(){
  	this.navCtrl.navigateForward('add-service');
  }

  editService(item:any){
  	this.objService.setExtras(item);
  	this.navCtrl.navigateForward('edit-service');
  }

  async presentActionSheet(item:any) {
	  const actionSheet = await this.actionSheetController.create({
	    header: 'Seleccione una acción',
	    cssClass: 'actionCamera',
	    buttons: [{
	      text: 'Editar',
	      icon: 'create',
	      handler: () => {
	      	this.editService(item);
	      }
	    }, {
	      text: 'Eliminar',
	      icon: 'trash',
	      handler: () => {
	      	this.presentConfirm(item);
	      }
	    }, {
	      text: 'Cancelar',
	      icon: 'close',
	      role: 'cancel',
	      handler: () => {
	        console.log('Cancel clicked');
	      }
	    }]
	  });
	  await actionSheet.present();
	}

	async presentLoading() {
	    this.loading = await this.loadingController.create({
	      spinner: 'dots',
	      duration: 15000,
	      translucent: true,
	      cssClass: 'custom-class custom-loading'
	    });
	    return await this.loading.present();
	}

  	async presentToast(text:any) {
		const toast = await this.toastCtrl.create({
		  message: text,
		  duration: 2000,
		  cssClass: 'toast-scheme'
		});
		toast.present();
	}

	public sortByKey(array:any, key:any) {
	    return array.sort(function (a:any, b:any) {
	        var x = a[key]; var y = b[key];
	        return ((x < y) ? -1 : ((x > y) ? 0 : 1));
	    });
	}

	async presentConfirm(item:any) {
	    const alert = await this.alertController.create({
		message: '¿Desea eliminar el servicio '+item.nombre+'?',
		buttons: [
	        {
	          text: 'No',
	          role: 'cancel',
	          handler: () => {
	            console.log('Cancel clicked');
	          }
	        },
	        {
	          text: 'Si',
	          handler: () => {
	          	this.deleteServices(item);
	          }
	        }
	      ]
		});
		await alert.present();
	}

}
