import UuidGenerator from "../utils/UuidGenerator";


export default class User {
    constructor(firstName, lastName, age) {
        this.id = UuidGenerator.uuid4()
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    getName() {
        return this.firstName + ' ' + this.lastName
    }
}