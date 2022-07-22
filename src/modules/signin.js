const prefix = "signin"
const SET_USERNAME = `${prefix}/SET_USERNAME`;
const SET_PASSWORD = `${prefix}/SET_PASSWORD`;
const SET_AUTHENTICATION = `${prefix}/SET_AUTHENTICATION`;

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

export const setAuthentication = (token, authenticated) => {
    return {
        type: SET_AUTHENTICATION,
        token,
        authenticated
    };
}

const initialState = {
    username: "",
    password: "",
    token: null,
    authenticated: false
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
        case SET_AUTHENTICATION:
            return {
                ...state,
                password: action.password
            }
        default:
            return state;
    }
}