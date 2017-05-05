export class Class12 {
    anotherInstanceProp1: string;
    anotherInstanceProp2: boolean;
    newDivNode: HTMLElement | null;

    constructor() {
        this.anotherInstanceProp1 = "Class 12 / Module 1";
        this.anotherInstanceProp2 =  true;
        this.newDivNode = document.getElementById("newDivNode");

        // this.newNodeMethod is not a function
        if (this.newDivNode) {
            this.newDivNode.innerHTML = this.anotherInstanceProp1;
        } else {
            console.warn("No new node available - constructor")
        }
    }

    newNodeMethod() {
        if (this.newDivNode) {
            this.newDivNode.innerHTML = this.anotherInstanceProp1;
        } else {
            console.warn("No new node available - method");
        }
    }


}