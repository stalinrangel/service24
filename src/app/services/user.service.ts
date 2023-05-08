import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient, public storage: StorageService) { }

  /* GET estado proveedor */
  getStatus(id:any,token:any): Observable<any>{
    return this.http.get(`${environment.api}repartidores/`+id+'?token='+token);
  }

  /* PUT estado proveedor */
  setStatus(id:any,token:any,data:any): Observable<any>{
    return this.http.put(`${environment.api}repartidores/`+id+'?token='+token,data);
  }

  /* PUT datos de usuario */
  setUser(id:any,token:any,data:any): Observable<any>{
    return this.http.put(`${environment.api}repartidores/`+id+'?token='+token, data);
  }

  /* PUT datos de usuario */
  setUsuario(id:any,token:any,data:any): Observable<any>{
    return this.http.put(`${environment.api}usuarios/`+id+'?token='+token, data);
  }

  /* GET datos contacto */
  getContact(pais:any): Observable<any>{
    return this.http.get(`${environment.api}sistema/contacto?pais_id=`+pais);
  }

  /* GET id de chat con soporte */
  getId(id:any,token:any,ciudad:any): Observable<any>{
    return this.http.get(`${environment.api}chats/repartidores/michat/`+id+'?ciudad_id='+ciudad+'&token='+token);
  }

  /* POST pre-registro */
  setPreRegister(token:any,data:any): Observable<any>{
    console.log(data)
    console.log(`${environment.api}login/registro?token=`+token)
    return this.http.post(`${environment.api}login/registro?token=`+token, data);
  }

  /* PUT pre-registro */
  putPreRegister(token:any,data:any,id:any): Observable<any>{
    return this.http.put(`${environment.api}registro/`+id+`?token=`+token, data);
  }

  /* GET planes */
  getPlans(token:any,id:any): Observable<any>{
    return this.http.get(`${environment.api}planes?pais_id=`+id+`&token=`+token);
  }  

  /* POST contrato */
  postContrat(nombre:any,ci:any,direccion:any,telefono:any,usuario_id:any,plan:any,token:any,data:any,pais:any): Observable<any>{
    return this.http.post(`${environment.api}con_contratos?nombre=`+nombre+`&ci=`+ci+`&direccion=`+direccion+`&telefono=`+telefono+`&usuario_id=`+usuario_id+`&plan=`+plan+`&firma=`+null+`&pais_id=`+pais+`&token=`+token, data);
  }

  /* GET planes */
  getContrat(id:any,token:any): Observable<any>{
    return this.http.get(`${environment.api}con_contratos/`+id+`?token=`+token);
  }

  /* GET notificaciones */
  getCity(id:any,token:any): Observable<any>{
    return this.http.get(`${environment.api}usuario_zona/`+id+`?token=`+token);
  }

  /* GET notificaciones */
  getNotifications(ciudad_id:any,token:any,user_id:any): Observable<any>{
    return this.http.get(`${environment.api}notificaciones_generales_t3?ciudad_id=`+ciudad_id+`&usuario_id=`+user_id+`&token=`+token);
  }

  /* GET pagos */
  getPayment(id:any,token:any): Observable<any>{
    return this.http.get(`${environment.api}cobros/`+id+`?token=`+token);
  }

  /* GET terminos */
  getTerminos(id:any,token:any): Observable<any>{
    return this.http.get(`${environment.api}sistema/terminos?pais_id=`+id+`&token=`+token);
  }

  /* GET avisos */
  getPolice(id:any,token:any): Observable<any>{
    return this.http.get(`${environment.api}sistema/aviso?pais_id=`+id+`&token=`+token);
  }

  /* GET cerraSeccion */
  logout(id:any,token:any): Observable<any>{
    return this.http.get(`${environment.api}cerrar_sesion/`+id+`&token=`+token);
  }
}
