import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable, OnInit} from "@angular/core";
import {Location} from "../model/location";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";

const path = environment.apiUrl + '/user/meetingroom'

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable({
    providedIn: 'root'
})
export class MeetingroomService implements OnInit {

    constructor(
        private http: HttpClient
    ) {
    }

    ngOnInit() {
    }

    updateMeetingRoom(meetingroom_id: number, location: Location, maxCapacity: number) {
        return this.http.put(path +"/"+ meetingroom_id, {
            location,
            maxCapacity
        }, httpOptions);

    }

    loadMeetingRooms() {
        return this.http.get(path, {params: {order: 'asc'}})
    }

    addMeetingroom(location: Location, maxCapacity: number): Observable<any> {
        return this.http.post(path, {location, maxCapacity});
    }
}
