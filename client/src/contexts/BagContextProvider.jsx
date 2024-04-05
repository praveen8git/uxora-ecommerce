import { useState } from "react";
import BagContext from "./BagContext";
import { toast } from "react-toastify";
import { useLocalStorage } from "../hooks/useLocalStorage";

const BagContextProvider = ({ children }) => {
    // const [bagItems, setBagItems] = useState([]);
    const [bagItems, setBagItems] = useLocalStorage('bag', []);

    const addToBag = (item) => {
        console.log(bagItems,"bagItems");
        setBagItems(bagItems => {
            const itemExists = bagItems.find(itemFromBag => itemFromBag.id === item.id);
            if(!itemExists) {
                toast.success("Product Added to the bag!", {className: "toastify", autoClose: 4000})
                console.log([...bagItems, item]);
                return [...bagItems, item];
            } else {
                toast.error("This Product already present in bag!", { className: "toastify", autoclose: 4000 })
                // console.log(bagItems,'current bag items');
                return bagItems
            }
        });
        
    }

    const removeFromBag = (itemId) => {
        setBagItems(bagItems.filter(item => item.id !== itemId));
        console.log(itemId,'removed');
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