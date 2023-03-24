import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {CurrencyPipe} from "@angular/common";
import {ShoppingService} from "../service/shopping.service";
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";
import {TokenStorageService} from "../service/token.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: []
})
export class ProductComponent implements OnInit {
    orderPlaced: boolean;
    @ViewChildren("total") cartTotal: QueryList<ElementRef>;
    @ViewChildren("current_cart_items") currentCartItems: QueryList<ElementRef>;
    private isLoggedIn: boolean;
    constructor(private shoppingService: ShoppingService, private productService: ProductService, private tokenStorageService: TokenStorageService, private router: Router){

    }
    products = [];
    productList: Product[]

    //----- calculate total
    get total() {
        return this.products.reduce(
            (sum, x) => ({quantity: 1, price: sum.price + x.quantity * x.price}),
            { quantity: 1, price: 0 }).price;
    }

    loadShopProducts() {
        this.productService.loadProducts().subscribe(
            data => {
                this.productList = data['payload']
            }, error => {
                console.log("Something went wrong, could not find any products" + error);
            }
        )
    }

    changeSubtotal(item, index) {
        const quantity = item.quantity;
        const price = item.price;
        const total = quantity * price;

        this.currentCartItems.toArray()[index].nativeElement.innerHTML = total;
        this.shoppingService.saveCart();
    }

    removeFromCart(product) {
        this.shoppingService.removeItem(product);
        this.products = this.shoppingService.getItems();
    }

    checkoutCart(products) {
        if(this.isLoggedIn) {
            this.shoppingService.clearCart(products);
            this.products = [...this.shoppingService.getItems()];
            this.orderPlaced = true;
        }
        else{
            this.router.navigate(["login"])
        }
    }

    addToCart(product) {
        if (!this.shoppingService.itemInCart(product)) {
            product.quantity = 1;
            this.shoppingService.addToCart(product); //add items in cart
            this.products = [...this.shoppingService.getItems()];
        }
    }

    ngOnInit(): void {
        this.shoppingService.loadCart();
        this.loadShopProducts();
        this.products = this.shoppingService.getItems();
        this.isLoggedIn = !!this.tokenStorageService.getToken();
    }
}
