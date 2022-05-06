const SET_USERNAME = "signup/SET_USERNAME";
const SET_PASSWORD = "signup/SET_PASSWORD";
const SET_PASSWORD_VALIDATOR = "signup/SET_PASSWORD_VALIDATOR";

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

export const setPasswordValidator = (passwordValidator) => {
    return {
        type: SET_PASSWORD_VALIDATOR,
        passwordValidator
    };
}

const initialState = {
    username: "",
    password: "",
    passwordValidator: ""
}

export default function signup(state = initialState, action) {
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
            };
        case SET_PASSWORD_VALIDATOR:
            return {
                ...state,
                passwordValidator: action.passwordValidator
            };
        default:
            return state;
    }
}