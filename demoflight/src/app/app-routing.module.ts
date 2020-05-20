import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';

const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full' },
  { path:'home',component:HomeComponent },
  { path:'booking',component:BookinglistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
