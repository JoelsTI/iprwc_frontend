export class Location {
    private _id: number;
    private _name: string;
    private _address: string;
    private _maxCapacity: number;

    constructor(id: number, name: string, address: string, maxCapacity: number) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._maxCapacity = maxCapacity;
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

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get maxCapacity(): number {
        return this._maxCapacity;
    }

    set maxCapacity(value: number) {
        this._maxCapacity = value;
    }
}
