import { useState } from "react"
import CartContext from "./CartContext"



const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([{ quantity: 1, name: "pepito", id: 1234 }])

    const addItem = (item, q) => {
        console.log([
            ...cart,
            {
                quantity: q,
                ...item
            }
        ])
        setCart([
            ...cart,
            {
                quantity: q,
                ...item
            }
        ]
        )
    }

    const removeItem = (id) => {
        setCart(
            cart.filter((el) => el.id !== id) //voy a dejar los articulos q no corresponden al id q quiero eliminar
        )
    }

    const clear = () => {
        setCart([])
    }

    // const getTotal = () => {
    //     return 2500
    // }

    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        // getTotal
    }
    return (

        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider