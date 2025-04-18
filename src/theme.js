// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "'Montserrat', sans-serif",
    },
    palette: {
        primary: {
            main: "#1976d2",  // Customize as desired
        },
        secondary: {
            main: "#dc004e",
        },
    },
});

export default theme;
