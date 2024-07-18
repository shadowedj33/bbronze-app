import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../reducers/features/loadSlice";
import { setUser } from "../reducers/features/userSlice";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ children }) {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getUser = async () => {
        try {
            dispatch(showLoading());
            const res = await axios.post(
                "/api/v1/user/getUserData",
                { token: localStorage.getItem("token") },
                {
                    headers: {
                        Authorization: 'Bearer ${localStorage.getItem("token")}',
                    },
                }
            );
            dispatch(hideLoading());
            if (res.data.success) {
                dispatch(setUser(res.data.data));
            } else {
                localStorage.clear();
                <Navigate to="/login" />;
            }
        } catch (err) {
            localStorage.clear();
            dispatch(hideLoading());
            console.log(err);
        }
    };

    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, [user, getUser]);

    if (localStorage.getItem("token")) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
}