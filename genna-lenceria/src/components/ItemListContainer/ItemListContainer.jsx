import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "items");

        getDocs(itemCollection)
            .then((snapshot) => {
                setProducts(
                    snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })).filter(item => item.category === categoryId.toLowerCase())
                )
            }).catch((error) => {
                console.error("Error fetching documents: ", error);
            })
    }, [])


    return (
        <div>
            <ItemList items={products} />
        </div>
    )
}


export default ItemListContainer;



