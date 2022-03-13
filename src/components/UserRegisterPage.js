import { Box, Button, Container, FormControl, TextField } from "@mui/material";
import { useState } from "react";

const inputStyle = {
    "margin-top": "1em"
};

const UserRegisterPage = () => {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const inputAccount = (event) => {
        setAccount(event.target.value);
    };

    const inputPassword = (event) => {
        setPassword(event.target.value);
    };

    const inputPasswordCheck = (event) => {
        setPasswordCheck(event.target.value);
    };

    const onClickRegister = () => {
        if(isInvalid()) {
            return;
        }

        console.log("register!");
    }

    const isInvalid = () => {
        if (!account) {
            alert("계정을 입력하세요");
            return true;
        }

        if (!password) {
            alert("비밀번호를 입력하세요");
            return true;
        }

        if (!passwordCheck) {
            alert("비밀번호 한번 더 입력하세요");
            return true;
        }

        if (password !== passwordCheck) {
            alert("비밀번호가 다릅니다");
            return true;
        }

        if (account.length < 4) {
            alert("계정은 4글자 이상이어야 합니다");
            return true;
        }

        if (password.length < 6) {
            alert("비밀번호는 6글자 이상이어야 합니다");
            return true;
        }

        return false;
    }

    return (
        <Container maxWidth="sm">
            <Box style={{"margin-top" : "10em"}}>
                <FormControl fullWidth>
                    <TextField
                        label="account"
                        id="account"
                        value={account}
                        onChange={inputAccount} />
                </FormControl>
                <div style={inputStyle}></div>
                <FormControl fullWidth>
                    <TextField
                        label="password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={inputPassword} />
                </FormControl>
                <div style={inputStyle}></div>
                <FormControl fullWidth>
                    <TextField
                        label="password check"
                        type="password"
                        id="passwordCheck"
                        value={passwordCheck}
                        onChange={inputPasswordCheck} />
                </FormControl>
                <div style={inputStyle}></div>
                <Button fullWidth variant="contained" onClick={onClickRegister}>REGISTER</Button>
            </Box>
        </Container>
    );
};

export default UserRegisterPage;