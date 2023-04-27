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

  register(model: any): Observable<any> {
    console.log(model)
    return this.http.post(`${environment.api}establecimientos`, model)
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
