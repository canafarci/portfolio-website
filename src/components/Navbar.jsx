// src/components/Navbar.jsx
import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaBehanceSquare, FaBars } from "react-icons/fa";

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleDrawerToggle = () => {
        setDrawerOpen((prev) => !prev);
    };

    // Solid outline style for text
    const textOutline =
        "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white";

    // Filter-based outline for SVG icons
    const iconOutline = {
        filter:
            "drop-shadow(1px 1px 1px white) drop-shadow(-1px -1px 1px white) drop-shadow(-1px 1px 1px white) drop-shadow(1px -1px 1px white)",
    };

    // Drawer content for mobile internal navigation
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", pt: 5 }}>
            <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>

            </Typography>
            <List>
                {[
                    { label: "Portfolio", path: "/" },
                    { label: "About", path: "/about" },
                    { label: "Experience", path: "/experience" },
                ].map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            component={RouterLink}
                            to={item.path}
                            sx={{ textAlign: "center" }}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
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
                    {/* Left Side */}
                    {isMobile ? (
                        <>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2 }}
                            >
                                <FaBars size="1.8rem" style={iconOutline} />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component={RouterLink}
                                to="/"
                                sx={{
                                    flexGrow: 1,
                                    textDecoration: "none",
                                    color: "inherit",
                                    fontWeight: "bold",
                                    fontSize: {sm: "1rem", md:"1.8rem" },
                                    textShadow: textOutline,
                                }}
                            >
                                İsmet Berke Çakır
                            </Typography>
                        </>
                    ) : (
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
                    )}

                    {/* Right Side: External Links */}
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

            {/* Drawer for mobile internal navigation */}
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
};

export default Navbar;
