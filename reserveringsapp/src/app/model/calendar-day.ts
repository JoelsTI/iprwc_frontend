import {MeetingroomReservation} from "./meetingroom-reservation";
import {WorkroomReservation} from "./workroom-reservation";

export interface CalendarDay {
    dayNumber: number
    dayHasFriendReservation: boolean
    reservations: Array<MeetingroomReservation|WorkroomReservation>
}
