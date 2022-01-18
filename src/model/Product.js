import UuidGenerator from "../utils/UuidGenerator";

export default class Product {
    constructor(image, name, price) {
        this.id = UuidGenerator.uuid4()
        this.image = image
        this.name = name
        this.price = price
    }
}