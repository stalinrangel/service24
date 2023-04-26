import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjetcserviceService {

  extras: any;
	category: any;
	id: any;
	plans: any;
	type: any;

	constructor() { }

	public setExtras(data: any){
		this.extras = data;
	}

	public getExtras(){
		return this.extras;
	}

	public setCat(data: any){
		this.category = data;
	}

	public getCat(){
		return this.category;
	}

	public setId(data: any){
		this.id = data;
	}

	public getId(){
		return this.id;
	}

	public setPlans(data: any){
		this.plans = data;
	}

	public getPlans(){
		return this.plans;
	}

	public setType(data: any){
		this.type = data;
	}

	public getType(){
		return this.type;
	}
}
