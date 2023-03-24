import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../service/token.service";
import {AuthService} from "../service/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: any = {
        email: null,
        password: null
    };
    isLoggedIn = false;
    isLoginFailed = false;

    constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

    ngOnInit(): void {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;

            window.location.href="/dashboard";
        }
    }

    onSubmit(): void {
        const {email, password} = this.form;

        this.authService.login(email, password).subscribe(
            data => {
                this.tokenStorage.saveToken(data.jwt_token);
                this.authService.getUserDetails().subscribe(
                    userData => {
                        this.isLoginFailed = false;
                        this.isLoggedIn = true;

                        window.location.href="/dashboard";
                    }, error => {
                        this.isLoginFailed = true;
                        this.isLoggedIn = false;
                        this.tokenStorage.signOut();
                        console.log(error);
                    }
                );

            },
            err => {
                console.log(err);
                this.isLoginFailed = true;
            }
        );
    }
}
