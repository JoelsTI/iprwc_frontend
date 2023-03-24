import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManagementComponent } from './management/management/management.component';
import { authInterceptorProviders } from "./helpers/auth.interceptor";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { DeleteEmployeeComponent } from './management/delete-employee/delete-employee.component';
import { AddProductComponent } from './management/add-product/add-product.component';
import {ProductComponent} from "./product/product.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ManagementComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ContentComponent,
    DeleteEmployeeComponent,
    AddProductComponent,
      ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
