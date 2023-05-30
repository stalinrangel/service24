import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavController, LoadingController, AlertController, ToastController, Platform, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';
import { ObjetcserviceService } from '../services/objetcservice.service';
//import { TutorialPage } from '../tutorial/tutorial.page';
//import { SignInWithApple, AppleSignInResponse, AppleSignInErrorResponse, ASAuthorizationAppleIDRequest } from '@ionic-native/sign-in-with-apple/ngx';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class LoginPage implements OnInit {

  user: any = {};
  private apiResponse:any;
  public datos:any;
  public response:any;
  public loading:any;
  public loginUserForm:any;
  public apiuser = {
    nombre: '',
    email: null,
    imagen: 'https://service24.app/alinstanteAPI/public/images_uploads/app/profile_general.png',
    telefono: '',
    id_facebook: null,
    id_twitter: null,
    id_instagram: null,
    tipo_registro: 0,
    token_notificacion: null
  };
  public subscription: any;
  public btnApple: boolean = false;

  constructor(
    public nav: NavController, 
    private loadingController: LoadingController,  
    private builder: FormBuilder, 
    public alertController: AlertController, 
    public storage: StorageService,
    public auth: AuthService, 
    private toastController: ToastController,
    private objService: ObjetcserviceService,
    private platform: Platform,
    public modalController: ModalController
  ) {
  }

  ngOnInit() {
    this.initForm();
    //this.storage.get('TUTORIALPV').then(val => {
      //if (val == null || val == 'undefined') {
        //this.openTutorialPopover();
      //}
    //});
    if (this.platform.is('ios')) {
      this.btnApple = true;
    }
  }

  ionViewDidEnter(){
      this.subscription = this.platform.backButton.subscribe(()=>{
       // navigator['app'].exitApp();
      });
  }

  ionViewWillLeave(){
    this.subscription.unsubscribe();
  }

  initForm() {
    this.loginUserForm = this.builder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      token_notificacion: ['']
    });
  }

  //LOGIN
  login(){
    if (this.loginUserForm.valid) {
      let self=this;
      this.auth.login(this.loginUserForm.value).subscribe({
        next(data){
          console.log(data);
          //alert(JSON.stringify(data))
          if (data) {
            
            self.nav.navigateRoot('/tabs/tab1');
            self.storage.set('TRPSV24',data.token);
            self.storage.set('idRPSV24',data.user.repartidor.id);
            self.storage.setObject('userRPSV24', data.user);
          }
        },error(err){
            console.log(err)
            alert(JSON.stringify(err))
        }
        });
    }   
  }

  //LOGIN Apple
 

  // LOGIN FACEBOOK
  

  

  

  async presentLoading() {
   // this.loading = await this.loadingController.create({
    //  spinner: 'dots',
    //  duration: 25000,
    //  translucent: true,
    //  cssClass: 'custom-class custom-loading'
    //});
    //return await this.loading.present();
  }

  async presentToast(text:any) {
    //const toast = await this.toastController.create({
    //  message: text,
    //  duration: 2000,
    //  cssClass: 'toast-scheme'
    //});
    //toast.present();
  }

  register(){
  	this.nav.navigateForward('register');
  }

  resetPassword(){
    this.nav.navigateForward('email-password');
  }

  goBack(){
    this.nav.pop();
  }

  /*async openTutorialPopover() {
    const modal = await this.modalController.create({
      component: TutorialPage,
      backdropDismiss: false,
      cssClass: 'tutorial-modal-css'
    });
    return await modal.present();
  }*/

}
