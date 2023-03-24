import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {hashSync} from "bcryptjs";
import {EncryptionService} from "./auth.encryption.service";
import {environment} from "../../environments/environment.prod";

const API = environment.apiUrl;
const AUTH_API = environment.apiUrlAuth;

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient, private encryption: EncryptionService) {}

    login(email: string, password: string): Observable<any> {
        password = this.encryption.encrypt(password)

        return this.http.post(AUTH_API + '/login', {
            email,
            password
        }, httpOptions);
    }

    register(name: string, email: string, password: string): Observable<any> {
        password = hashSync(password, 0);
        password = this.encryption.encrypt(password);

        return this.http.post(AUTH_API + '/register', {
            name,
            email,
            password: password,
        }, httpOptions);
    }

    getUserDetails(): Observable<any> {
        return this.http.get(API + '/user/info', {});
    }
}
