import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import setAuthorizationToken from "./lib/setAuthorizationToken";
import rootReducer from "./modules/rootReducer";

const store = configureStore({ reducer: rootReducer });
setAuthorizationToken(localStorage.jwtToken); // reload시에도 저장될 수 있도록함

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
