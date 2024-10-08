import React, { useContext, useState } from 'react';
import CartContext from './CartContext'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import Form from '../Form/Form';


const CartDetail = () => {

    const [orderId, setOrderId] = useState('')

    const [buyer, setBuyer] = useState({
        name: "",
        email: ""
    })

    const [error, setError] = useState({
        name: "",
        email: ""
    })

    const { cart, removeItem, clear } = useContext(CartContext)

    const handleChage = (e) => {

        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }


    const submit = (e) => {
        e.preventDefault()
        const localError = {}
        if (!buyer.name) {
            localError.name = "El nombre es obligatorio"
        }
        if (!buyer.email) {
            localError.email = "El email es obligatorio"
        }

        if (Object.keys(localError).length === 0) {
            addToCart()
        } else {
            setError(localError)
        }
    }


    const addToCart = () => {
        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        const purchase = {
            buyer,
            items: cart,
            total: 1500,
            date: new Date()
        }
        addDoc(orderCollection, purchase)
            .then(res => {
                setOrderId(res.id)
                clear()
                setBuyer({
                    name: '',
                    email: ''
                })
            })
            .catch(error => console.log(error))
    }



console.log(cart)


    return (
        <div>
            <h3>CART</h3>
            <Form handleChage={handleChage} submit={submit} formData={buyer} error={error} />
            <div>
                {
                    cart.map(el => (
                        <div key={el.id}>
                            <div>
                                <p>Product: {el.name}</p>
                                <p>Cantidad: {el.quantity}</p>
                            </div>
                            <img src={el.image} alt="" />
                            <button onClick={() => removeItem(el.id)} > Eliminar </button>
                        </div >
                    ))
                }
            </div>
            {
                orderId && <p>Gracias por su compra
                    orden de compra {orderId}
                </p>
            }
        </div>
    )
}

export default CartDetail;