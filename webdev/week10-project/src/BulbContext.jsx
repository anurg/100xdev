import { Children, createContext, useContext, useState } from "react";

const BulbContext = createContext();
export function BulbContextProvider({children}) {
    const [bulbOn, setBulbOn]=useState(true);
    return (
        <BulbContext.Provider value={{
            bulbOn: bulbOn,
            setBulbOn: setBulbOn
        }}>
        {children}
        </BulbContext.Provider>
    );
}

export function useBulbContext() {
    return useContext(BulbContext);
}

