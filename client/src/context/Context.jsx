import { Children, createContext, useState } from "react";



export const StoreContext = createContext(null);


export const StoreContextProvider = ({children}) => {

    const [menu, setMenu] = useState("home");
    const [slider, setSlider] = useState(false);
    const [currState, setCurrState] = useState("sign up");
    const [loginPopUp, setLoginPopUp] = useState(false);


    const contextValue = {
        menu,
        setMenu,
        slider,
        setSlider,
        currState,
        setCurrState,
        loginPopUp,
        setLoginPopUp,
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )



}