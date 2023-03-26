import { useState } from  "react";


export const localStorageKullan = (key , initialValue) => { 
	const [value, setValue] = useState(initialValue);

	const setToLocalStorage = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    
    }

    const readFromLocalStorage = () => {
        return localStorage.getItem(key);
    }

	return [value]; 
};

export default localStorageKullan;

