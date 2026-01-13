import { createContext, useContext, useEffect, useReducer }  from "react";

const intialState = { 
    isAuth:false,
    user: " "
};

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": localStorage.setItem("isAuth", "true");
         localStorage.setItem("user", action.payload.username);
         return { isAuth:true, user:action.payload.username };
        case "LOGOUT": localStorage.removeItem("isAuth", "user");
        return{isAuth: false, user:""};

        default:
            return state;
    }
}
const AuthContext = createContext(); //create context to store authentication data

export const AuthProvider = ({ children }) => {     //provider context wrap who;e app ot provides auth data to child
    const [state, dispatch] = useReducer(authReducer, intialState);   //global login state

    useEffect(() => {     //restore seesion on page reload
        const savedAuth = localStorage.getItem("isAuth");
        const savedUser = localStorage.getItem("user");
        if(savedAuth === "true" && savedUser) {
             dispatch({type: "LOGIN", payload:{username: savedUser}});
        }
    },[]);
    const login =  (username="priyanka") => dispatch({type: "LOGIN", payload:{username}});
     const logout = () => dispatch({type: "LOGOUT"});


    return (
        <AuthContext.Provider value = {{ isAuth: state.isAuth, user:state.user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {            //useAuth is custom hook for easy to access Authcontext insted writing everywhere useContext(AUthcontext)
    return useContext(AuthContext);
};



