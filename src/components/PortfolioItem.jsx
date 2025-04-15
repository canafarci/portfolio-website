// src/components/PortfolioItem.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const PortfolioItem = ({ project, id }) => {
    return (
        <Box
            component={RouterLink}
            to={`/projects/${id}`}
            sx={{
                position: "relative",
                display: "block",
                width:  { xs: 200, md: 300 },
                height: { xs: 300, md: 400 },
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.3s ease",
                "&:hover": {
                    transform: "scale(1.03)",
                },
            }}
        >
            {/* Overlay for title */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    p: 2,
                }}
            >
                <Typography variant="h5">{project.title}</Typography>
            </Box>
        </Box>
    );
};

export default PortfolioItem;
