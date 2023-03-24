import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Role} from "../model/role";
import {Employee} from "../model/employee";
import {environment} from "../../environments/environment.prod";

const API_PATH = environment.apiUrl + '/user/role';

@Injectable({
    providedIn: 'root'
})
export class RoleService {

    constructor(private http: HttpClient) {
    }

    getAllRoles() {
        return this.http.get(API_PATH);
    }

    removeRole(employee: Employee, roleTitle: string) {
        for(let i = 0; i < employee.roles.length; i++) {
            if(employee.roles[i].title === roleTitle) {
                employee.roles.splice(i, 1);
                break;
            }
        }
    }

    toReadableRoles(roles: Role[]): string {
        let roleTitles: string = "";
        if(roles[0].title === 'Disabled user') {
            return roles[0].title;
        }
        roles.forEach(role => {
            roleTitles += role.title + " ";
        });
        roleTitles = roleTitles.split(" ").join(", ");
        roleTitles = roleTitles.substring(0, roleTitles.length - 2);
        return roleTitles;
    }
}
