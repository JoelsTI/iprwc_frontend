import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Location} from "../model/location";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";

const path = environment.apiUrl + "/user/workroom"

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable({
    providedIn: 'root'
})
export class WorkroomService {

    constructor(
        private http: HttpClient
    ) {
    }

    updateWorkRoom(workroom_id: number, location: Location, maxCapacity: number) {
        return this.http.put(path +"/"+ workroom_id, {
            location,
            maxCapacity
        }, httpOptions);

    }


    loadWorkRooms() {
        return this.http.get(path, {params: {order: 'asc'}})
    }

    addWorkRoom(location: Location, maxCapacity: number): Observable<any> {
        return this.http.post(path, {location, maxCapacity});
    }
}
