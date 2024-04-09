import { useState } from "react";
import BagContext from "./BagContext";
import { toast } from "react-toastify";
import { useLocalStorage } from "../hooks/useLocalStorage";

/**
 * The `BagContextProvider` function in JavaScript React manages a shopping bag state with functions to
 * add, remove, empty, increase, and decrease item quantities.
 * @returns The `BagContextProvider` component is returning the `BagContext.Provider` component with
 * the provided context values and the children components passed to it. The context values include
 * `bagItems`, `addToBag`, `removeFromBag`, `emptyBag`, `increaseQuantity`, and `decreaseQuantity`
 * functions that can be accessed by the children components within the context of the
 * `BagContext.Provider`.
 */
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

    const emptyBag = () => {
        setBagItems([]);
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
                emptyBag,
                increaseQuantity,
                decreaseQuantity
            }}>
            {children}
        </BagContext.Provider>
    )

}

export default BagContextProvider;