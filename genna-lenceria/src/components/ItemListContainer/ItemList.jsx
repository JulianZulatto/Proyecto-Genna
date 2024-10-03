import React, { useEffect, useState } from "react";
import Pijamas from "../../Pages/Pijamas";

const ItemList = ({ items }) => {
    const [pijamaItems, setPijamaItems] = useState([]);

    useEffect(() => {
        
        if (items) {
            const filteredPijamas = items.filter(item => item.category === "pijamas");
            setPijamaItems(filteredPijamas);
        }
    }, [items]); 

    return (
        <div>
            <Pijamas products={pijamaItems} />
        </div>
    );
};

export default ItemList;
