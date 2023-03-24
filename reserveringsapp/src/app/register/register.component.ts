import {Component, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";
import {TokenStorageService} from "../service/token.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    form: any = {
        name: null,
        email: null,
        password: null
    };
    isSuccessful = false;
    isSignUpFailed = false;

    constructor(private authService: AuthService, private tokenStorage: TokenStorageService) {}

    ngOnInit(): void {
        if (this.tokenStorage.getToken()) {
            this.isSuccessful = true;

            window.location.href="/dashboard";
        }
    }

    onSubmit(): void {
        const {name, email, password} = this.form;

        this.authService.register(name, email, password).subscribe(
            data => {
                this.tokenStorage.saveToken(data.jwt_token);

                this.isSuccessful = true;
                this.isSignUpFailed = false;

                window.location.href="/dashboard";
            },
            err => {
                console.log(err);
                this.isSignUpFailed = true;
            }
        );
    }
}
