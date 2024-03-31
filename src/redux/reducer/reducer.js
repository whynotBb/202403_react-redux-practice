let initialState = {
    count: 0,
    authenticate: false,
};
function reducer(state = initialState, action) {
    console.log(action);
    // if else 문법으로 이용해도 됨
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + action.payload.num };
        case "DECREMENT":
            return { ...state, count: state.count - action.payload.num };
        case "LOGIN":
            return { ...state, authenticate: !state.authenticate };
        default:
            return { ...state };
    }
}

export default reducer;
