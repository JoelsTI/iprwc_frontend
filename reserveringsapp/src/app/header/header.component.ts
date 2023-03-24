import {Component} from '@angular/core';
import {TokenStorageService} from "../service/token.service";
import {AuthService} from "../service/auth.service";
import {Employee} from "../model/employee";
import {PermissionHelper} from "../helpers/permission.helper";
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: []
})
export class HeaderComponent {
    isLoggedIn = false;
    email?: string;
    currentUser =  { username:'Not logged in', email: ''};
    isAdmin = false;

    constructor(private tokenStorageService: TokenStorageService, private authService: AuthService, private permissionHelper: PermissionHelper, private router: Router) {}

    navItems = [
        {
            display: 'Dashboard',
            path: '/dashboard'
        },
        {
            display: 'Product',
            path: '/product'
        },
    ];

    ngOnInit(): void {
        this.isLoggedIn = !!this.tokenStorageService.getToken();

        if (this.isLoggedIn) {
            this.authService.getUserDetails().subscribe(
                data => {
                    this.currentUser.email = data.email;
                    this.currentUser.username = data.name;

                    const employee: Employee = data;
                    const roles = employee.roles;
                    const permissions = this.permissionHelper.rolesToPermissionsList(roles);

                    this.isAdmin = this.permissionHelper.hasAdminPermission(permissions);

                    if(this.isAdmin){
                        this.navItems.push({
                            display: 'Admin',
                            path: '/admin'
                        });
                    }
                },
                err => {
                    console.log("Failed to get user data " + err)
                });
        }



    }

    logout(): void {
        this.tokenStorageService.signOut();
        window.location.reload();
    }

    login(): void{
        this.router.navigate(['login']);
    }



    isExpanded: boolean;
}
