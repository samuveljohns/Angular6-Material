import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FootballersService {
  	constructor(public http: HttpClient) { 
  		//this.getHeroes();
  	}
  	getAlerts():Observable<any> {
        return this.http.get("http://localhost:3000/footballers")        
    }
}
