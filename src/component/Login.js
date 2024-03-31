import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const authenticate = useSelector((state) => state.authenticate);
    const dispatch = useDispatch();

    const login = () => {
        dispatch({ type: "LOGIN", payload: { id: userId, pw: userPw } });
    };
    return (
        <div className="login_box">
            {authenticate ? (
                `${userId}님 반갑습니다.`
            ) : (
                <>
                    <input
                        type="text"
                        id="id"
                        placeholder="ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                    <input
                        type="password"
                        id="pw"
                        placeholder="password"
                        value={userPw}
                        onChange={(e) => setUserPw(e.target.value)}
                    />
                </>
            )}

            <button onClick={login}>
                {authenticate}
                {authenticate ? "logout" : "login"}
            </button>
        </div>
    );
};

export default Login;
