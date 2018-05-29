import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FootballersService } from './../service/footballers/footballers.service';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 	data:any = [];
    constructor(public footballersService: FootballersService,public router:Router) { 
      	this.footballersService.getAlerts().subscribe(
    	    res => {
    			console.log(res);
    			this.data = res
    	    }
    	  );
    }
    displayPic(name){
      	return "http://localhost:3000/photo/"+encodeURI(name)+".png";
    }

    showProfile(id) {
        this.router.navigate(['/home',id]);
    }
}
