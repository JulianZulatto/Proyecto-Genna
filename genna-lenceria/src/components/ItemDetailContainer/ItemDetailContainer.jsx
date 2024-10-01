import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const[item, setItem] =useState({})
    const {id} = useParams()
    useEffect(() => {
        const db = getFirestore()
        const docRef= doc(db, "items", id)
        getDoc(docRef)
        .then((snapshot =>{
            setItem({
                id: snapshot.id,
                ...snapshot.data()
            })
        }))
    }, [])
    
    return (
        <div>
            {
                <ItemDetail item={item}/>
            }
        </div>
    )
}
export default ItemDetailContainer;