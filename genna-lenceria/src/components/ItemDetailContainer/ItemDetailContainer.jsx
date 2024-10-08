import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import CartContext from "../Cart/CartContext";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { productoId } = useParams()
    const { addItem } = useContext(CartContext)

    const onAdd = (q) => {
        addItem(item, q)
    }
    useEffect(() => {
        const db = getFirestore()
        const docRef = doc(db, "items", productoId)
        getDoc(docRef)

            .then((snapshot => {
                setItem({
                    productoId: snapshot.id,...snapshot.data()
                })
            }))
    }, [])

    return (
        <div>
            {
                <ItemDetail item={item} onAdd={onAdd} />
            }
        </div>
    )
}
export default ItemDetailContainer;

