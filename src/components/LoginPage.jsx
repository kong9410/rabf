import { Box, Button, Container, FormControl, Link, TextField } from "@mui/material";
import { useState } from "react";

const LoginPage = () => {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const inputAccount = (event) => {
        setAccount(event.target.value);
    };

    const inputPassword = (event) => {
        setPassword(event.target.value);
    };

    return (
        <Container maxWidth="sm">
            <Box style={{ "padding-top": "10em" }}>
                <FormControl fullWidth>
                    <TextField label="account" id="account" value={account} onChange={inputAccount} />
                </FormControl>
                <div style={{ "margin-top": "1em" }}></div>
                <FormControl fullWidth>
                    <TextField label="password" type="password" id="password" value={password} onChange={inputPassword} />
                </FormControl>
                <div style={{ "margin-top": "1em" }}></div>
                <Button fullWidth variant="contained">LOGIN</Button>
                <Link href="/register">
                    Register As User
                </Link>
            </Box>
        </Container>
    )
};

export default LoginPage;