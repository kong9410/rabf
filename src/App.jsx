import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import BarContainer from "./components/BarContainer";
import MainPage from "./components/MainPage";

function App() {
    return (
        <BrowserRouter>
            <BarContainer />
            <MainPage />
        </BrowserRouter>
    );
}

export default App;
