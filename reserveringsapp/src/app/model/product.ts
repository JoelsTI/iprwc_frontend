export class Product{
    private _id: number;
    private _name: string;
    private _price: number;
    private _description: string;


    constructor(id: number, name: string, price: number, image: string) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._description = image;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}



