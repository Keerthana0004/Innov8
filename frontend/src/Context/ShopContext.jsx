import React, {createContext} from "react"
import data_product from "../Components/Assets/data";
export const ShopContext =createContext(null);

const ShopContextProvider =(props) =>{
    const contextValue = {data_product};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.childrn}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;