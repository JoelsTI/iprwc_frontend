import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuard} from "./helpers/auth.guard";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ManagementComponent} from "./management/management/management.component";
import {AddProductComponent} from "./management/add-product/add-product.component";
import {ProductComponent} from "./product/product.component";

const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'admin', component: ManagementComponent, canActivate: [AuthGuard]},
    {path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard]},
    {path: 'product', component: ProductComponent},
    {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
