import UuidGenerator from "../utils/UuidGenerator";

export default class Product {
    constructor(id, image, name, price) {
        this.id = id
        this.image = image
        this.name = name
        this.price = price
    }
}