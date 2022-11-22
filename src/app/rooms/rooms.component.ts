import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
    selector: 'hinv-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
    hideTitle = false;
    hideRooms = true;
    hotelName = 'Pullman';
    //numberOfRooms = 10;

    rooms: Room = {
        availableRooms: 15,
        bookedRooms: 10,
        totalRooms: 25,
    };

    roomList: RoomList[] = [
        {
            roomType: 'Deluxe 1',
            amenities: 'Free wifi, AC, pantry',
            checkInTime: new Date('10-Sep-2022'),
            checkOutTime: new Date('12-Sep-2022'),
            price: 490,
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPa8YY87r0NStXs2OOWbLAltPg-ld7kgQoNw&usqp=CAU',
        },

        {
            roomType: 'Deluxe 2',
            amenities: 'Free wifi, AC, pantry, washer-dryer',
            checkInTime: new Date('10-Sep-2022'),
            checkOutTime: new Date('12-Sep-2022'),
            price: 690,
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPa8YY87r0NStXs2OOWbLAltPg-ld7kgQoNw&usqp=CAU',
        },

        {
            roomType: 'Deluxe 3',
            amenities: 'Free wifi, AC, pantry, washer-dryer, hot tub',
            checkInTime: new Date('10-Sep-2022'),
            checkOutTime: new Date('12-Sep-2022'),
            price: 890,
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPa8YY87r0NStXs2OOWbLAltPg-ld7kgQoNw&usqp=CAU',
        },
    ];

    constructor() {}

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
        this.rooms.bookedRooms = this.rooms.bookedRooms - 1;

        if (this.rooms.availableRooms >= 25) {
            alert('Fully available');
            document.getElementById('add')?.setAttribute('disabled', '');
        }

        if (this.rooms.bookedRooms > 0) {
            document.getElementById('take')?.removeAttribute('disabled');
        }
    }

    takeRoom() {
        this.rooms.bookedRooms = this.rooms.bookedRooms + 1;
        this.rooms.availableRooms = this.rooms.availableRooms - 1;

        if (this.rooms.bookedRooms >= 25) {
            document.getElementById('take')?.setAttribute('disabled', '');
            alert('Fully booked');
        }

        if (this.rooms.bookedRooms < 25) {
            document.getElementById('add')?.removeAttribute('disabled');
        }
    }
}
