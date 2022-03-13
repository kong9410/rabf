import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Link } from 'react-router-dom';

const pages = [
    {
        menuName: "product",
        path: "/product"
    },
    {
        menuName: "login",
        path: "/login"
    }
];

const Bar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="x1">
                <Toolbar disableGutters>
                    <Typography variant="h6" noWrap component="div">LOGO</Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <Link exact="true" to={page.path} key={index} style={{textDecoration: "none"}}>
                                <Button
                                    key={page.menuName}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page.menuName}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Bar;