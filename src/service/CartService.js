import {CART_KEY} from "../utils/LocalStorageUtil";
import CartItem from "../model/CartItem";

class CartService {

    addToCart(product, setCartItems) {
        const oldItems = this.getCartItems()
        const idEqual = item => item.productId === product.id

        if (oldItems.some(idEqual)) {
            const newItems = oldItems.map(item => {
                if (idEqual(item)) {
                    return {...item, count: item.count + 1}
                }
                return item
            })
            setCartItems(newItems)
        } else {
            const newCartItem = new CartItem(product.id, product.image, product.name, 1, product.price)
            setCartItems([...oldItems, newCartItem])
        }
    }

    getCartItems() {
        const item = window.localStorage.getItem(CART_KEY);
        return item ? JSON.parse(item) : []
    }
}

export const cartService = new CartService()
