import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";
import { setPassword, setUsername } from "../modules/signin";
import Button from "./common/Button";
import Form from "./common/Form";
import Input from "./common/Input";
import Label from "./common/Label";

const SignInP = styledComponents.p`
    diplay: block;
    text-align: right;
`;

const SignInPage = ({ onSubmit }) => {
    const dispatch = useDispatch();

    const { username, password } = useSelector((state) => ({
        username: state.signin.username,
        password: state.signin.password,
    }));

    const onUsernameChange = useCallback(
        ({ target: { value } }) => dispatch(setUsername(value)),
        []
    );
    const onPasswordChange = useCallback(
        ({ target: { value } }) => dispatch(setPassword(value)),
        []
    );

    return (
        <Form half>
            <Label htmlFor="username" block>
                username
            </Label>
            <Input
                id="username"
                value={username}
                onChange={onUsernameChange}
                block
            />
            <Label htmlFor="password" block>
                password
            </Label>
            <Input
                id="password"
                value={password}
                type="password"
                onChange={onPasswordChange}
                block
            />
            <Button onClick={onSubmit} primary block>
                LOGIN
            </Button>

            <Link exact="true" to="/signup">
                <SignInP>signup</SignInP>
            </Link>
        </Form>
    );
};

export default SignInPage;
