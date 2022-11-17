import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hideTitle = false;
  hideRooms = true;
  hotelName = "Pullman";
  numberOfRooms = 10;

  constructor() { }

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
    // alert("Clicked")
  }

  show() {
    this.hideTitle = !this.hideTitle;

  }

  addRoom() {
    this.numberOfRooms = this.numberOfRooms + 1;

    if (this.numberOfRooms === 25) {
      alert("Fully available");
      document.getElementById("add")?.setAttribute("disabled","");
    }
  }

  takeRoom() {
    this.numberOfRooms = this.numberOfRooms - 1;

    if (this.numberOfRooms <= 0) {
      this.numberOfRooms = 0;
      alert("Fully booked");
    }

    if (this.numberOfRooms < 25) {
      document.getElementById("add")?.removeAttribute('disabled');
    }
  }
}
