import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RoomFilterService {
    filter: boolean = false;
    showMeetingRooms: boolean = false;
    showWorkRooms: boolean = false;

    switchFilter(){
        this.filter = !this.filter;
    }
}
