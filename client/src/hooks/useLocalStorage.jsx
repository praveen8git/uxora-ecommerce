import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue
    })

    const setValue = (value) => {
        // localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    }

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(storedValue));
    },[storedValue,key])

    return [storedValue, setValue]
}

export { useLocalStorage }