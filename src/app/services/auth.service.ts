import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
//import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: any;

  constructor(public http: HttpClient/*, public storage: StorageService*/) {}
 
  login(model: any): Observable<any> {
    console.log(model)
    return this.http.post(`${environment.api}login/repartidores`, model)
  }
  

  public loginSocial(credentials: any) {
    if (credentials.email === null) {
      //return Observable.throw("Please insert credentials");
    } else {
      //return Observable.create(observer => {
        this.http.get(`${environment.api}login/repartidores`, credentials)
        .toPromise()
        .then(
          data => {
            this.usuario = data;
            //this.storage.set('TRPSV24',this.usuario.token);
            //this.storage.set('idRPSV24',this.usuario.user.repartidor.id);
            //this.storage.setObject('userRPSV24', this.usuario.user);
          //  observer.next(true);
          //  observer.complete();
          },
          msg => {
          //  observer.error(msg.error);
          //  observer.complete();
          }); 
      //});
    }
  }

  public registerSocial(credentials: any) {
    if (credentials.nombre === null || credentials.email === null) {
      //return Observable.throw("Please insert credentials");
    } else {
      //return Observable.create(observer => {
      	this.http.post(`${environment.api}establecimientos`, credentials)
    		.toPromise()
    		.then(
    		data => {
          this.usuario = data;
          //this.storage.set('TRPSV24',this.usuario.token);
          //this.storage.setObject('userRPSV24', this.usuario.usuario);
    		//	observer.next(true);
    		//	observer.complete();
    		},
    		msg => {
    			//observer.error(msg.error);
    			//observer.complete();
    		});
      //});
    }
  }

  public register(credentials: any) {
    if (credentials.nombre === null || credentials.email === null  || credentials.telefono === null || credentials.password === null || credentials.rpassword === null) {
      //return Observable.throw("Please insert credentials");
    } else {
      //return Observable.create(observer => {
      	this.http.post(`${environment.api}establecimientos`, credentials)
    		.toPromise()
    		.then(
    		data => {
          this.usuario = data;
          console.log(data);
          //this.storage.set('TURPSV24',this.usuario.token);
          //this.storage.setObject('userRPSV24', this.usuario.usuario);
        //  observer.next(true);
        //  observer.complete();
    		},
    		msg => {
    		//	observer.error(msg.error);
    		//	observer.complete();
    		});
      //});
    }
  }

  public verifySms(number: any, data: any): Observable<any>{
    return this.http.post(`${environment.api}verificar_numero/`+number, data);
  }

  public sendCode(email: any): Observable<any>{
    return this.http.get(`${environment.api}password/cliente/`+email);
  }

  public verifyCode(code: any): Observable<any>{
    return this.http.get(`${environment.api}password/codigo/`+code);
  }

  public updatePassword(id: any,data: any,token: any): Observable<any>{
    return this.http.put(`${environment.api}usuarios/`+id+`?token=`+token, data);
  }
 
  public getUserInfo() {
    return //this.storage.getObject('userSV24');
  }
 
  public logout() {
    //return Observable.create(observer => {
      //observer.next(true);
      //observer.complete();
    //});
  }
}
