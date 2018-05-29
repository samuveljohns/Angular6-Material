import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FootballersService } from './service/footballers/footballers.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FootballersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
