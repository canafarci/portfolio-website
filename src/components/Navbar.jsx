// src/components/Navbar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
    return (
        <AppBar
            position="fixed"
            color="transparent"
            elevation={0}
            sx={{
                backdropFilter: "blur(10px)",
                zIndex: (theme) => theme.zIndex.drawer + 1, // ensure it stays on top
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography
                    variant="h6"
                    component={RouterLink}
                    to="/"
                    sx={{
                        textDecoration: "none",
                        color: "inherit",
                        fontWeight: "bold",
                    }}
                >
                    İsmet Berke Çakır
                </Typography>
                <Box>
                    <Button
                        component={RouterLink}
                        to="/"
                        color="inherit"
                        sx={{ textTransform: "none", fontSize: "1rem" }}
                    >
                        Portfolio
                    </Button>
                    <Button
                        component={RouterLink}
                        to="/about"
                        color="inherit"
                        sx={{ textTransform: "none", fontSize: "1rem" }}
                    >
                        About
                    </Button>
                    <Button
                        component={RouterLink}
                        to="/experience"
                        color="inherit"
                        sx={{ textTransform: "none", fontSize: "1rem" }}
                    >
                        Experience
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
