import { createContext, useState } from "react";

export const CarContext = createContext();

export const CarProvider = ({children}) => {
    const [count, setCount] = useState([]);

    return (
        <CarContext.Provider value={{count, setCount}}>
            {children}
        </CarContext.Provider>
    )

}