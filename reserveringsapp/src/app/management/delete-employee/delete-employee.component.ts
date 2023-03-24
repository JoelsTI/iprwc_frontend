import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Employee} from "../../model/employee";

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: []
})
export class DeleteEmployeeComponent implements OnInit {

    userSelected: boolean = false;
    current_user: Employee;
    employees: Employee[];

    showSucces: boolean = null;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getAllUsers().subscribe(
            data => {
                this.employees = data['payload'];
                this.userService.filterDisabledEmployees(this.employees);
            }
        );
    }

    clickedUser(employee: Employee) {
        this.showSucces = null;
        if (this.current_user != undefined && this.current_user.id === employee.id) {
            this.userSelected = false;
            this.current_user = null;
            return;
        }

        this.userSelected = true;
        this.current_user = employee;
    }

    onCancel() {
        this.current_user = null;
        this.userSelected = false;
    }

    onDisable() {
        this.userService.disableUser(this.current_user.id).subscribe(
            data => {
                if (data === null) {
                    this.showSucces = true;

                    this.employees.splice(this.employees.indexOf(this.current_user), 1);
                    this.current_user = null;
                    this.userSelected = false;
                }
            },
            err => {
                this.showSucces = false;
            }
        );
    }
}
