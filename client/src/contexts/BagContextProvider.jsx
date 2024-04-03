import { useState } from "react";
import BagContext from "./BagContext";

const BagContextProvider = ({ children }) => {
    const [bagItems, setBagItems] = useState([]);

    const addToBag = (item) => {
        setBagItems([...bagItems, item]);
    }

    const removeFromBag = (itemId) => {
        setBagItems(bagItems.filter(item => item.id !== itemId));
    }

    const increaseQuantity = (itemId) => {
        setBagItems(bagItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        }));
    };

    const decreaseQuantity = (itemId) => {
        setBagItems(bagItems.map(item => {
            if (item.id === itemId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }));
    };

    return (
        <BagContext.Provider
            value={{
                bagItems,
                addToBag,
                removeFromBag,
                increaseQuantity,
                decreaseQuantity
            }}>
            {children}
        </BagContext.Provider>
    )

}

export default BagContextProvider;