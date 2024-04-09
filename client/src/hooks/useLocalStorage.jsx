import { useEffect, useState } from "react";

/**
 * The `useLocalStorage` custom hook in JavaScript React allows for storing and retrieving values in
 * local storage with automatic synchronization.
 * @returns The `useLocalStorage` custom hook is returning an array with two elements: `storedValue`
 * and `setValue`. `storedValue` is the current value stored in localStorage for the provided key, or
 * the `initialValue` if no value is found. `setValue` is a function that allows updating the stored
 * value in localStorage.
 */
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