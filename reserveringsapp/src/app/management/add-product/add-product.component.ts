import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: []
})
export class AddProductComponent implements OnInit {

    productDetails = {
        name: null,
        price: null,
        description: null
    };

    validName = null;
    validPrice = null;
    validDescription = null;

    submitted: boolean = false;
    showSucces: boolean = false;

    constructor(private productService: ProductService) {}

    ngOnInit(): void {}

    reset(): void {
        this.productDetails.name = null;
        this.productDetails.price = null;
        this.productDetails.description = null;
    }

    onSubmit(): void {
        this.productService.addProduct(this.productDetails.name, this.productDetails.price, this.productDetails.description).subscribe(
            response => {
                this.submitted = true;
                this.showSucces = true;

                this.validName = this.productDetails.name;
                this.validPrice = this.productDetails.price;
                this.validDescription = this.productDetails.description;
                this.reset();

            }, error => {
                this.submitted = true;
                this.showSucces = false;
                this.reset();
            }
        );
    }
}
