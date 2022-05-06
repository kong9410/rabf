import { Route, Routes } from "react-router-dom";
import SectionContainer from "./common/SectionContainer";
import SignInContainer from "./SignInContainer";
import SignInPage from "./SignInPage";
import SignUpContainer from "./SignUpContainer";

const MainPage = () => {
    return (
        <SectionContainer>
            <Routes>
                <Route exact path="/" element={<SignInPage />} />
                <Route path="/signin" element={<SignInContainer />} />
                <Route path="/signup" element={<SignUpContainer />} />
            </Routes>
        </SectionContainer>
    );
};

export default MainPage;
