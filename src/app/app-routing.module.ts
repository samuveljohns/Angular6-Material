import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { ProfileComponent }  from './profile/profile.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'home/:id', component: ProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot( routes, { useHash: true })
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
