import { Observable } from "tns-core-modules/data/observable";
import configFile from "./config.json";

export class HelloWorldModel extends Observable {

    private _users: Array<any>;
    private _count: number;

    constructor() {
        super();

        this.users = configFile.users;
        this.count = configFile.count;
    }

    get users(): Array<any> {
        return this._users;
    }
    
    set users(value: Array<any>) {
        if (this._users !== value) {
            this._users = value;
            this.notifyPropertyChange("users", value)
        }
    }

    get count(): number {
        return this._count;
    }
    
    set count(value: number) {
        if (this._count !== value) {
            this._count = value;
            this.notifyPropertyChange("count", value)
        }
    }
}
