import {Class21} from "./module2/module2";
import {Class11} from "./module1/module1";

export class App {
    class21: Class21;
    class11: Class11;

    constructor() {
        this.class21 = new Class21();
        this.class11 = new Class11();
    }

    click() {
        this.class21.instanceMethod();
    }

    reset() {
        this.class21.instanceMethod3();
        this.class21.instanceMethod2();
    }

    createDiv() {
        this.class11.createNewNode();
    }

    modifyDivModulo3() {
        this.class11.appendClassOutsideBarrels();
    }
}

let app = new App();
(<any>window).app = app;

document.onreadystatechange = function() {
    if (document.readyState === "complete") {
        console.log("Document ready");
    }
}

