import {Injectable} from "@angular/core";
import {MeetingroomReservation} from "../model/meetingroom-reservation";
import {WorkroomReservation} from "../model/workroom-reservation";

@Injectable({
    providedIn: "root"
})

export class TimeService {
    constructor() { }

    toReadableTimestamp(res) {
        const startSplitted = res.startTime.split("T");
        startSplitted[1] = startSplitted[1].substring(0, 5);
        res.startTime = startSplitted[0] + " " + startSplitted[1];

        const endSplitted = res.endTime.split("T");
        endSplitted[1] = endSplitted[1].substring(0, 5);
        res.endTime = endSplitted[0] + " " + endSplitted[1];
    }

    formatTimestamps(meetingRoomReservations: MeetingroomReservation[], workRoomReservations: WorkroomReservation[]) {
        for(let res of meetingRoomReservations) {
            this.toReadableTimestamp(res);
        }
        for(let res of workRoomReservations){
            this.toReadableTimestamp(res);
        }
    }
}
