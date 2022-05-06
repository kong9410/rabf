import axios from "axios";
import { useSelector } from "react-redux";
import SignInPage from "./SignInPage";

const SignInContainer = () => {
    const { username, password } = useSelector((state) => ({
        username: state.signin.username,
        password: state.signin.password,
    }));

    const onSubmit = (e) => {
        e.preventDefault();

        if (isInvalid()) {
            return;
        }

        axios({
            method: "post",
            url: "/signin",
            data: {
                username: username,
                password: password,
            },
        })
            .then(function (response) {
                alert(response);
            })
            .catch((error) => {
                alert("서버에서 오류가 발생했습니다.");
            });
    };

    const isInvalid = () => {
        if (!username) {
            alert("계정을 입력하세요");
            return true;
        }

        if (!password) {
            alert("비밀번호를 입력하세요");
            return true;
        }

        return false;
    };

    return <SignInPage onSubmit={onSubmit} />;
};

export default SignInContainer;
