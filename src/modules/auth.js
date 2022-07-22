const initialState = {
    authenticated: false,
    token: null
}

export default setToken = (state, action) => {
    switch(action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
                authenticated: action.result
            };
        default:
            return state;
    }
}