import {CART_KEY} from "../utils/LocalStorageUtil";
import CartItem from "../model/CartItem";

class CartService {

    addToCart(product, setCartItems) {
        const cartItems = this.getCartItems()
        const idEqualPredicate = item => item.productId === product.id

        if (cartItems.some(idEqualPredicate)) {
            const items = cartItems.map(item => {
                if (idEqualPredicate(item)) {
                    return {...item, count: item.count + 1}
                }
                return item
            })
            setCartItems(items)
        } else {
            const cartItem = new CartItem(product.id, product.image, product.name, 1, product.price)
            setCartItems([...cartItems, cartItem])
        }
    }

    getCartItems() {
        const item = window.localStorage.getItem(CART_KEY);
        return item ? JSON.parse(item) : []
    }
}

export const cartService = new CartService()
