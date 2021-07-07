import React, {useContext, useMemo, useReducer} from 'react';
import axios from 'axios';

//IMPORT REDUCER, INITIAL STATE AND ACTION TYPES
import reducer, {initialState, LOGGED_IN, LOGGED_OUT} from '../reducer/authReducer';
import * as api from '../../Service/UserService';

// CONTEXT ===================================
const AuthContext = React.createContext();

export const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState || {});

    const handleLogin = async (data) => {
        try{
            let responseLog = await api.login(data);
            if (responseLog.token != null){
                axios.defaults.headers.common["Authorization"] = `Bearer ${responseLog.token}`;
                let response = await api.information(data.username);
                dispatch({type: LOGGED_IN, user:response});
            }
        }catch (error) {
            throw new Error(error);
        }
    };

    const handleLogout = async () => {
        try{
            delete axios.defaults.headers.common["Authorization"];
            dispatch({type: LOGGED_OUT});
        }catch (error) {
            throw new Error(error);
        }
    };

    const value = useMemo(() => {
        return {state, handleLogin, handleLogout};
    }, [state]);

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);
export { AuthContext, useAuth }
