import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import Pijamas from '../../Pages/Pijamas';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "items")

        getDocs(itemCollection)
            .then((snapshot) => {
                setProducts(
                    snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                )
            })
    }, [])
    return (
        <div>
            <Pijamas products={products} />
        </div>
    )
}


export default ItemListContainer;

