import Product from "../model/Product";
import feat1 from "../assets/images/item-01.jpg";
import feat2 from "../assets/images/item-02.jpg";
import feat3 from "../assets/images/item-03.jpg";
import feat4 from "../assets/images/item-04.jpg";

class ProductService {
    getAllProducts() {
        return [
            new Product(1, feat1, "Boxy7 T-Shirt with Roll Sleeve", 20.0),
            new Product(2, feat2, "Denim jacket blue", 92.5),
            new Product(3, feat3, "Coach slim easton black", 165.9),
            new Product(4, feat4, "Frayed denim shorts", 29.5),
            new Product(5, feat1, "Herschel supply co 25l", 75.0),
            new Product(6, feat2, "Denim jacket blue", 92.5),
            new Product(7, feat3, "Coach slim easton black", 165.9),
            new Product(8, feat4, "Frayed denim shorts", 29.5),
        ]
    }
}

export const productService = new ProductService()