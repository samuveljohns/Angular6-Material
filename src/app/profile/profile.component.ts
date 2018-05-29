import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public router:Router) { }

	ngOnInit() {
	}
  	displayPic(name){
	  	return "http://localhost:3000/photo/"+encodeURI(name)+".png";
	}
	goBack() {
        this.router.navigate(['/home']);
    }
}
