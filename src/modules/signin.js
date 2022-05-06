const SET_USERNAME = "signin/SET_USERNAME";
const SET_PASSWORD = "signin/SET_PASSWORD";

export const setUsername = (username) => {
    return {
        type: SET_USERNAME,
        username
    };
}

export const setPassword = (password) => {
    return {
        type: SET_PASSWORD,
        password
    };
}

const initialState = {
    username: "",
    password: ""
};

export default function signin(state = initialState, action) {
    switch(action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.username
            };
        case SET_PASSWORD:
            return {
                ...state,
                password: action.password
            }
        default:
            return state;
    }
}