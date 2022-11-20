import { Component, OnInit } from '@angular/core';
import { Room } from './rooms'


@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hideTitle = false;
  hideRooms = true;
  hotelName = "Pullman";
  //numberOfRooms = 10;

  rooms: Room = {
    availableRooms: 15,
    bookedRooms: 10,
    totalRooms: 25
  }

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
    this.rooms.availableRooms = this.rooms.availableRooms + 1;
    this.rooms.bookedRooms = this.rooms.bookedRooms -1;
    
    if (this.rooms.availableRooms === 25) {
      alert("Fully available");
      document.getElementById("add")?.setAttribute("disabled","");
    }
  }

  takeRoom() {
    this.rooms.bookedRooms = this.rooms.bookedRooms - 1;
    this.rooms.availableRooms = this.rooms.availableRooms +1;

    if (this.rooms.bookedRooms <= 0) {
      this.rooms.bookedRooms = 0;
      alert("Fully booked");
    }

    if (this.rooms.bookedRooms < 25) {
      document.getElementById("add")?.removeAttribute('disabled');
    }
  }
}
