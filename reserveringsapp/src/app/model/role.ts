export class Role {
    private _id: number;
    private _title: string;
    private _description: string;
    private _permissions: string;

    constructor(id: number, title: string, description: string, permissions: string) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._permissions = permissions;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get permissions(): string {
        return this._permissions;
    }

    set permissions(value: string) {
        this._permissions = value;
    }
}
