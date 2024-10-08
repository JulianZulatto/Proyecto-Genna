import React, { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = ({ items }) => {


    return (
        <div>
            <Item products={items} />
        </div>
    );
};

export default ItemList;
