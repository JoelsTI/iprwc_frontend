import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {Employee} from "../../model/employee";
import {AuthService} from "../../service/auth.service";
import {PermissionHelper} from "../../helpers/permission.helper";

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: []
})
export class ManagementComponent implements OnInit {
    onAdminPage: boolean;

    adminOptions = ['Add Product'];

    isAdmin: boolean = false;

  constructor(private router: Router, private authService: AuthService, private permissionHelper: PermissionHelper) { }

  ngOnInit(): void {
      this.onAdminPage = true;

      this.authService.getUserDetails().subscribe(
          data => {
              const employee: Employee = data;
              const roles = employee.roles;
              const permissions = this.permissionHelper.rolesToPermissionsList(roles);
              this.isAdmin = this.permissionHelper.hasAdminPermission(permissions);
              if(!this.isAdmin) {
                  void this.router.navigate(['dashboard']);
              }
          }
      );
  }

  loadSelectedOption(option: string) {
      switch (option) {
          case 'Add Product':
              this.router.navigate(['add-product']);
              break;
          default:
              console.log('Option ' + option + 'is not a possible admin option');
      }
  }
}
