import axios from "axios";
import { useSelector } from "react-redux";
import SignUpPage from "./SignUpPage";

const SignUpContainer = () => {
    const { username, password, passwordValidator } = useSelector((state) => ({
        username: state.signup.username,
        password: state.signup.password,
        passwordValidator: state.signup.passwordValidator,
    }));

    const onSubmit = (e) => {
        e.preventDefault();

        if (isInvalid()) {
            return;
        }

        axios({
            method: "post",
            url: "/signup",
            data: {
                username: username,
                password: password,
            },
        })
            .then(function (response) {
                alert(response);
            })
            .catch((error) => {
                if (!error.response) {
                    alert("서버에서 오류가 발생했습니다.");
                } else if (
                    error.response.data.errorType === "USER_ALREADY_EXISTS"
                ) {
                    alert("이미 존재하는 아이디 입니다.");
                }
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

        if (!passwordValidator) {
            alert("비밀번호 한번 더 입력하세요");
            return true;
        }

        if (password !== passwordValidator) {
            alert("비밀번호가 다릅니다");
            return true;
        }

        if (username.length < 4) {
            alert("계정은 4글자 이상이어야 합니다");
            return true;
        }

        if (password.length < 6) {
            alert("비밀번호는 6글자 이상이어야 합니다");
            return true;
        }

        return false;
    };

    return <SignUpPage onSubmit={onSubmit} />;
};

export default SignUpContainer;
