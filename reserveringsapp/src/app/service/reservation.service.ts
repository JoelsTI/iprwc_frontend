import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Employee} from "../model/employee";
import {environment} from "../../environments/environment.prod";

const USER_API = environment.apiUrl + '/user';


@Injectable({
    providedIn: 'root'
})
export class ReservationService {
    chooseReservation = true;
    showReservationEdit = false;
    constructor(private http: HttpClient) {}

    reserveMeetingroom(endTime: Date, startTime: Date, present: boolean, meeting_room_id: number): Observable<any>{
        return this.http.post( USER_API + '/meetingroom/' + meeting_room_id + '/reservations', {
            endTime, startTime, present, meeting_room_id
        }, );
    }

    reserveWorkroom(endTime: Date, startTime: Date, present: boolean, work_room_id: number): Observable<any>{
        return this.http.post( USER_API + '/workroom/' + work_room_id + '/reservations', {
            endTime, startTime, present, work_room_id
        }, );
    }

    loadReservations(employee_id: number){
        return this.http.get(USER_API + '/' + employee_id + '/reservations');
    }

    loadRecentFriendReservations(employee_id: number) {
        return this.http.get(USER_API + '/' + employee_id + '/friendReservations');
    }

    loadRecentReservations() {
        return this.http.get(USER_API + '/reservations', {params: {order: 'asc'}})
    }

    editMeetingroomReservation(id: number, endTime: Date, present: boolean, startTime: Date, employee_id: number, meeting_room_id: number){
        return this.http.put(USER_API + '/meetingroom/' + meeting_room_id + '/reservations/' + id, {
            id, endTime, present, startTime, employee_id, meeting_room_id
        }, );
    }

    editWorkroomReservation(id: number, endTime: Date, present: boolean, startTime: Date, employee_id: number, work_room_id: number){
        return this.http.put(USER_API + '/workroom/' + work_room_id + '/reservations/' + id, {
            id, endTime, present, startTime, employee_id, work_room_id
        }, );
    }

    deleteMeetingroomReservation(id: number, endTime: Date, present: boolean, startTime: Date, employee_id: number, meeting_room_id: number){
        return this.http.delete(USER_API + '/meetingroom/' + meeting_room_id + '/reservations/' + id, {
        }, );
    }

    deleteWorkroomReservation(id: number, endTime: Date, present: boolean, startTime: Date, employee_id: number, work_room_id: number){
        return this.http.delete(USER_API + '/workroom/' + work_room_id + '/reservations/' + id, {
        }, );
    }

    secretaryReserveMeetingroom(endTime: Date, startTime: Date, present: boolean, meeting_room_id: number, employee: Employee) {
        return this.http.post(USER_API + "/meetingroom/" + meeting_room_id + "/reservations/" + employee.id, {
            endTime, startTime, present
        });
    }

    secretaryReserveWorkroom(endTime: Date, startTime: Date, present: boolean, work_room_id: number, employee: Employee) {
        return this.http.post(USER_API + "/workroom/" + work_room_id + "/reservations/" + employee.id, {
            endTime, startTime, present
        });
    }
}
