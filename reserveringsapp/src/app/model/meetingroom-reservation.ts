import {Employee} from "./employee";
import {Meetingroom} from "./meetingroom";

export class MeetingroomReservation {
    private _id: number;
    private _employee: Employee;
    private _meetingRoom: Meetingroom;
    private _startTime: String;
    private _endTime: String;
    private _present: boolean;
    private _expired: boolean;


    constructor(id: number, employee: Employee, meetingRoom: Meetingroom, startTime: String, endTime: String, present: boolean, expired: boolean) {
        this._id = id;
        this._employee = employee;
        this._meetingRoom = meetingRoom;
        this._startTime = startTime;
        this._endTime = endTime;
        this._present = present;
        this._expired = expired;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get employee(): Employee {
        return this._employee;
    }

    set employee(value: Employee) {
        this._employee = value;
    }

    get meetingRoom(): Meetingroom {
        return this._meetingRoom;
    }

    set meetingRoom(value: Meetingroom) {
        this._meetingRoom = value;
    }

    get startTime(): String {
        return this._startTime;
    }

    set startTime(value: String) {
        this._startTime = value;
    }

    get endTime(): String {
        return this._endTime;
    }

    set endTime(value: String) {
        this._endTime = value;
    }

    get present(): boolean {
        return this._present;
    }

    set present(value: boolean) {
        this._present = value;
    }

    get expired(): boolean {
        return this._expired;
    }

    set expired(value: boolean) {
        this._expired = value;
    }
}
