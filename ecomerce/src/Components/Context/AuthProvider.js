import React, {useState} from 'react';
import AuthContext from './AuthContext';

function AuthProvider(props){
    const [userInfo,setUserInfo] = useState(false)//esto se agrego para la notificacion de nombre
    const[userLogin,setUserLogin] = useState(localStorage.getItem("login"))
    const loginUser = ()=>{
        setUserLogin(true)
        //esto se agrego para la notificacion de nombre
        setUserInfo(userInfo)
        localStorage.setItem("login",true)
    }

    const logoutUser = ()=>{
        setUserLogin(false)
        localStorage.removeItem("login")

}
    return(
        <AuthContext.Provider
            value={{
                loginUser,
                logoutUser,
                userLogin,
                userInfo //esto tambien
            }}
        >

        {props.children}    

        </AuthContext.Provider>
    )

}
export default AuthProvider;