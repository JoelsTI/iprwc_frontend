import {Location} from "./location";


export class Meetingroom {
    private _id: number;
    private _location: Location;
    private _maxCapacity: number;
    private _recentReservations: number;


    constructor(id: number, location: Location, maxCapacity: number) {
        this._id = id;
        this._location = location;
        this._maxCapacity = maxCapacity;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get location(): Location {
        return this._location;
    }

    set location(value: Location) {
        this._location = value;
    }

    get maxCapacity(): number {
        return this._maxCapacity;
    }

    set maxCapacity(value: number) {
        this._maxCapacity = value;
    }

    get recentReservations(): number {
        return  this._recentReservations;
    }

    set recentReservations(value: number) {
        this._recentReservations = value;
    }
}
