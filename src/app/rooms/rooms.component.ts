import { Component, OnInit } from '@angular/core';

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
  }

  show() {
    this.hideTitle = !this.hideTitle;
  }
}
