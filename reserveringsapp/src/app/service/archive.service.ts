import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment.prod";

const path = environment.apiUrl + '/user/reservations/archive'

@Injectable({
    providedIn: 'root'
})
export class ArchiveService {

    constructor(private http: HttpClient) {
    }

    loadArchive() {
        return this.http.get(path, {params: {order: 'asc'}});
    }
}
