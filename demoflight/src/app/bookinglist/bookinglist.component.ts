import { Component, OnInit } from '@angular/core';  

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent {
  rows = [];
  isShow = false;
  
  onSubmit(value:any[]){
    console.log(value);
    this.rows = value; 
    this.isShow = !this.isShow;
    console.log(this.rows);
  }
}
