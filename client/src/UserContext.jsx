/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";

const initial_state = {
    user : localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : null,    
    loading: false,
    error:null
};

export const UserContext = createContext();

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
            };
        case "FOLLOW":
            return {
                ...state,
                user: {
                    ...state.user,
                    followings: [...state.user.followings, action.payload],
                },
            };
        case "UNFOLLOW":
            return {
                ...state,
                user: {
                    ...state.user,
                    followings: state.user.followings.filter(
                        (following) => following !== action.payload
                    ),
                },
            };
        default:
            return state;
    }
};

export const UserContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initial_state);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <UserContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </UserContext.Provider>
    )
};