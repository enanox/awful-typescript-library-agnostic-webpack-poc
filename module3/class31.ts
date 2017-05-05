export class Class31 {
    constructor() {
        const appMessage = document.getElementById("app-message");
        const newDivNode = document.getElementById("newDivNode");

        if (!!newDivNode) {
            newDivNode.innerHTML = "Async load Class31!";
        }
    }
}