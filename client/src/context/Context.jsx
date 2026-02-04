import { Children, createContext, useState } from "react";



export const StoreContext = createContext(null);


export const StoreContextProvider = ({children}) => {

    const [menu, setMenu] = useState("home");
    const [slider, setSlider] = useState(false);


    const contextValue = {
        menu,
        setMenu,
        slider,
        setSlider,
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )



}