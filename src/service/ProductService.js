import Product from "../model/Product";
import feat1 from "../assets/images/item-01.jpg";
import feat2 from "../assets/images/item-02.jpg";
import feat3 from "../assets/images/item-03.jpg";
import feat4 from "../assets/images/item-04.jpg";

class ProductService {
    getAllProducts() {
        return [
            new Product(1, feat1, "Product 1", 20.0, 'best-sellers'),
            new Product(2, feat2, "Product 2", 92.5, 'best-sellers'),
            new Product(3, feat3, "Product 3", 165.9, 'best-sellers'),
            new Product(4, feat4, "Product 4", 29.5, 'best-sellers'),
            new Product(5, feat1, "Product 5", 20.0, 'featured'),
            new Product(6, feat2, "Product 6", 92.5, 'featured'),
            new Product(7, feat3, "Product 7", 165.9, 'featured'),
            new Product(8, feat4, "Product 8", 29.5, 'featured'),
            new Product(9, feat1, "Product 9", 20.0, 'featured'),
            new Product(10, feat2, "Product 10", 92.5, 'featured'),
            new Product(11, feat3, "Product 11", 165.9, 'featured'),
            new Product(12, feat4, "Product 12", 29.5, 'featured'),
            new Product(13, feat1, "Product 13", 20.0, 'men'),
            new Product(14, feat2, "Product 14", 92.5, 'men'),
            new Product(15, feat3, "Product 15", 165.9, 'men'),
            new Product(16, feat4, "Product 16", 29.5, 'men'),
            new Product(17, feat1, "Product 17", 20.0, 'women'),
            new Product(18, feat2, "Product 18", 92.5, 'women'),
            new Product(19, feat3, "Product 19", 165.9, 'women'),
            new Product(20, feat4, "Product 20", 29.5, 'women'),
        ]
    }

    getCategories() {
        return [
            {url: "best-sellers", name: "Best Seller"},
            {url: "featured", name: "Featured"},
            {url: "men", name: "Men"},
            {url: "women", name: "Women"},
        ]
    }

    getProductsByCategory(category) {
        let allProducts = this.getAllProducts()
        if (category === 'all') {
            return allProducts
        }
        return allProducts.filter(product => product.category === category)
    }
}

export const productService = new ProductService()