import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Box = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    const plus = () => {
        dispatch({ type: "INCREMENT", payload: { num: 5 } });
    };
    const minus = () => {
        dispatch({ type: "DECREMENT", payload: { num: 1 } });
    };
    return (
        <div className="counting_box">
            <button onClick={minus}>minus(-1)</button>
            <p>{count}</p>
            <button onClick={plus}>plus(+5)</button>
        </div>
    );
};

export default Box;
