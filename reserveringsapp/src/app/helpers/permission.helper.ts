import {Injectable} from "@angular/core";
import {Role} from "../model/role";

@Injectable({
    providedIn: 'root'
})
export class PermissionHelper {

    hasPermission(permissions: string[], permissionName: string): boolean {
        return !!permissions.find(p => p === permissionName);
    }

    hasAdminPermission(permissions: string[]): boolean {
        return this.hasPermission(permissions, 'ADMIN');
    }

    rolesToPermissionsList(roles: Role[]) {
        let permissions: string[] = [];
        roles.forEach((role) => {permissions = permissions.concat(role.permissions);});
        return permissions;
    }
}
