import {getCartItems} from "../utils/LocalStorageUtil";
import CartItem from "../model/CartItem";

class CartService {

    addToCart(product, setCartItems) {
        const cartItems = getCartItems()
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
}

export const cartService = new CartService()
