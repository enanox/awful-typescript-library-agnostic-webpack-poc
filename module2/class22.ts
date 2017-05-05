export enum InstanceEnum {
    ONE = 1,
    TWO = 2,
    THREE = 3
}
export class Class22 {
    newInstanceProp: string;
    newInstanceEnum: InstanceEnum;

    constructor() {
        this.newInstanceProp = "Class 22 / Module 2";
        this.newInstanceEnum = InstanceEnum.ONE;
    }
}