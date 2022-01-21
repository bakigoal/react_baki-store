import {useEffect, useState} from "react";

const CART_KEY = "cartItems"

const useLocalStorageState = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state]);

    return [state, setState];
};

export {useLocalStorageState, CART_KEY}