import {Class11} from "../module1/module1";

export class Class21 extends Class11 {    
    constructor() {
        super();

        this.instanceProp1 = "Class 21 / Modulo 2";
        this.instanceProp2 = 1337;
    }

    instanceMethod2() {
        console.log("New standalone method");
    }

    instanceMethod3() {
        if (this.appMessage) {
            this.appMessage.innerHTML = "";
        }
    }

}