import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PermissionHelper} from "../helpers/permission.helper";
import {Employee} from "../model/employee";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {Role} from "../model/role";

const API_PATH = environment.apiUrl + '/user';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable({
    providedIn: 'root'
})
export class UserService{

    name: string;
    email: string;

    constructor(private http: HttpClient, private permissionHelper: PermissionHelper) {
    }

    getAllUsers() {
        return this.http.get(API_PATH);
    }

    disableUser(user_id: number) {
        return this.http.delete(API_PATH + '/' + user_id);
    }

    filterDisabledEmployees(employees: Employee[]) {
        let filtered: Employee[] = []
        employees.forEach(employee => {
            const permissions = this.permissionHelper.rolesToPermissionsList(employee.roles);
            if(this.permissionHelper.hasPermission(permissions, 'NONE')) {
                filtered.push(employee);
            }
        });
        for(let employee of filtered) {
            employees.splice(employees.indexOf(employee), 1);
        }
    }

    editRole(userId: number, email: string, name: string, password: string, roles: Role[]): Observable<any> {
        return this.http.put(API_PATH + "/" + userId, {
            email,
            name,
            password,
            roles
        }, httpOptions);
    }
}
