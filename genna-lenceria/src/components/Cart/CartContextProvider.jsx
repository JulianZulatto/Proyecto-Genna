import { useState } from "react"
import CartContext from "./CartContext"



const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item, q) => {
        setCart([
            ...cart,
            {
                quantity: q,
                ...item
            }
        ])
    }

    const removeItem = (id) => {
        setCart(
            cart.filter((el) => el.id !== id)
        )
    }

    const clear = () => {
        setCart([])
    }

    const values = {
        cart,
        addItem,
        removeItem,
        clear
    }
    return (
        <>
            <CartContext.Provider value={values}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider