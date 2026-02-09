import { Children, createContext, useState } from "react";



export const StoreContext = createContext(null);


export const StoreContextProvider = ({children}) => {

    const url = "http://localhost:4000"
    const [menu, setMenu] = useState("home");
    const [slider, setSlider] = useState(false);
    const [currState, setCurrState] = useState("sign up");
    const [loginPopUp, setLoginPopUp] = useState(false);
    const [userData, setUserData] = useState({
        name:"",
        email:"",
        password:"",
    });
    const [token, setToken] = useState("");


    const contextValue = {
        menu,
        setMenu,
        slider,
        setSlider,
        currState,
        setCurrState,
        loginPopUp,
        setLoginPopUp,
        url,
        userData,
        setUserData,
        setToken,
        token,
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )



}