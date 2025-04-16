// src/components/Navbar.jsx
import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaBehanceSquare } from "react-icons/fa";

// Define a filter-based outline for SVG icons
const iconOutline = {
    filter:
        "drop-shadow(1px 1px 1px white) drop-shadow(-1px -1px 1px white) drop-shadow(-1px 1px 1px white) drop-shadow(1px -1px 1px white)"
};

const Navbar = () => {
    // For internal text links, we'll use a solid outline via textShadow
    const textOutline =
        "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white";

    return (
        <AppBar
            position="fixed"
            color="transparent"
            elevation={0}
            sx={{
                backdropFilter: "blur(10px)",
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* Left Side: Site Title and Internal Navigation */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Typography
                        variant="h6"
                        component={RouterLink}
                        to="/"
                        sx={{
                            textDecoration: "none",
                            color: "inherit",
                            fontWeight: "bold",
                            fontSize: "1.8rem",
                            textShadow: textOutline,
                        }}
                    >
                        İsmet Berke Çakır
                    </Typography>
                    <Button
                        component={RouterLink}
                        to="/"
                        color="inherit"
                        sx={{
                            textTransform: "none",
                            fontSize: "1.4rem",
                            textShadow: textOutline,

                        }}
                    >
                        Portfolio
                    </Button>
                    <Button
                        component={RouterLink}
                        to="/about"
                        color="inherit"
                        sx={{
                            textTransform: "none",
                            fontSize: "1.4rem",
                            textShadow: textOutline,
                        }}
                    >
                        About
                    </Button>
                    <Button
                        component={RouterLink}
                        to="/experience"
                        color="inherit"
                        sx={{
                            textTransform: "none",
                            fontSize: "1.4rem",
                            textShadow: textOutline,
                        }}
                    >
                        Experience
                    </Button>
                </Box>

                {/* Right Side: External Links with Icons */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconButton
                        component="a"
                        href="https://github.com/canafarci"
                        color="inherit"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size="2rem" style={iconOutline} />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/berkecakir/"
                        color="inherit"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size="2rem" style={iconOutline} />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://www.behance.net/berkecakir"
                        color="inherit"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaBehanceSquare size="2rem" style={iconOutline} />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
