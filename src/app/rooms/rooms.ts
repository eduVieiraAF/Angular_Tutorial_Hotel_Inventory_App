export interface Room {
    availableRooms: number;
    bookedRooms: number;
    totalRooms: number;
}

export interface RoomList {
    roomType: string;
    amenities: string;
    price: number;
    photo: string;
    checkInTime: Date;
    checkOutTime: Date;
    rating: number;
}
