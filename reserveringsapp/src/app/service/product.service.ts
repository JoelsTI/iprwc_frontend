import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Observable} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ProductService {
    path = environment.apiUrl + '/products';
    constructor(private http: HttpClient) {}

    loadProducts() {
        return this.http.get(this.path, {params: {order: 'asc'}})
    }

    addProduct(name: string, price: number, description: string): Observable<any> {
        return this.http.post(this.path, {name, price, description});
    }
}
