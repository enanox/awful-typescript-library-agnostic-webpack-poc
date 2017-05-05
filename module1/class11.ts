// Polyfill to System.import that webpack resolves
declare global {
  interface System {
    import(request: string): Promise<any>
  }  
  var System: System
}

const ALREADY_CREATED = "There is a created block already!";
const MISSING_BLOCK = "You need to create the new block first!";

export class Class11 {
    instanceProp1: string
    instanceProp2: number;
    appMessage: HTMLElement | HTMLDivElement | null;

    constructor() {
        this.instanceProp1 = "Class 1 / Module 1";
        this.instanceProp2 = 666;
    }

    instanceMethod() {
        const message = `Instance method - prop1: ${this.instanceProp1} - prop2:  ${this.instanceProp2}`;
        this.appMessage = document && document.getElementById("app-message");

        if (!!this.appMessage) {
            this.appMessage.innerHTML = message;
        } else {
            console.log(message);
        }
    }

    createNewNode() {
        console.log("Called create new node");

        if (!document.getElementById("newDivNode")) {
            const newDivNode = document.createElement("div");
            newDivNode.setAttribute("id", "newDivNode");
            newDivNode.setAttribute("style", "width: 100%; height: 50px; border: 1px solid red; font-size: 1.3rem");

            document.body.appendChild(newDivNode);
            System.import("./class12").then((class12) => {
                if (class12 && class12.Class12 && typeof class12.Class12 === "function") {
                    class12.Class12();
                }
            });
        } else {
            this.showErrorMessage(ALREADY_CREATED, 1500);
        }
    }

    appendClassOutsideBarrels() {
        if (!document.getElementById("newDivNode")) {
            this.showErrorMessage(MISSING_BLOCK, 1500);
        } else {
            System.import("../module3/class31.ts").then((class31Wrapper) => {
                const class31 = class31Wrapper && class31Wrapper.Class31;

                if (class31 && typeof class31 === "function") {
                    class31();
                }
            });
        }
    }

    showErrorMessage(text: string, delay: number) {
            let oldMessage = "";
            
            if (!!this.appMessage) {
                oldMessage = this.appMessage.innerHTML;
            } else {
                this.appMessage = document.getElementById("app-message");
                oldMessage = this.appMessage!.innerHTML;
            }

            const span: HTMLSpanElement | null = document.createElement("span");
            span.setAttribute("style", "font-weight: bold; font-size: 16px; color: red; display: block");
            span.innerHTML = text;
            
            if (this.appMessage) {
                this.appMessage.appendChild(span);
            }

            var timeout = setTimeout(() => {
                if (this.appMessage) {
                    this.appMessage.innerHTML = oldMessage;
                }
                window.clearTimeout(timeout);
            }, delay);
    }
}