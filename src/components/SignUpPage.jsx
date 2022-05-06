import { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styledComponents from "styled-components";
import {
    setPassword,
    setPasswordValidator,
    setUsername,
} from "../modules/signup";
import Button from "./common/Button";
import Form from "./common/Form";
import Input from "./common/Input";
import Label from "./common/Label";

const SignUpSection = styledComponents.div`
    width: 96%;
    height: 96%;
    padding: 2%;
`;

const SignUpPage = ({ onSubmit }) => {
    const dispatch = useDispatch();

    const { username, password, passwordValidator } = useSelector(
        (state) => ({
            username: state.signup.username,
            password: state.signup.password,
            passwordValidator: state.signup.passwordValidator,
        }),
        shallowEqual
    );

    const onUsernameChange = useCallback(
        ({ target: { value } }) => dispatch(setUsername(value)),
        []
    );
    const onPasswordChange = useCallback(
        ({ target: { value } }) => dispatch(setPassword(value)),
        []
    );
    const onPasswordValidatorChange = useCallback(
        ({ target: { value } }) => dispatch(setPasswordValidator(value)),
        []
    );

    return (
        <Form onSubmit={onSubmit} componentsCenter half>
            <p>Sign-Up</p>
            <Label htmlFor="username" block>
                username
            </Label>
            <Input
                label="username"
                id="username"
                value={username}
                onChange={onUsernameChange}
                block
            />
            <Label htmlFor="password" block>
                password
            </Label>
            <Input
                label="password"
                id="password"
                value={password}
                type="password"
                onChange={onPasswordChange}
                block
            />
            <Label htmlFor="passwordValidator" block>
                password validation
            </Label>
            <Input
                label="passwordValidator"
                id="passwordValidator"
                value={passwordValidator}
                type="password"
                onChange={onPasswordValidatorChange}
                block
            />
            <Button onClick={onSubmit} primary>
                SIGNUP
            </Button>
        </Form>
    );
};

export default SignUpPage;
