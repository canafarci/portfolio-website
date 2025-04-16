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
                // On mobile, fill the grid item width; on larger screens, fix at 300px.
                width: { xs: "100vw", md: 300 },
                // Force a 3:4 aspect ratio on mobile using CSS aspect-ratio property.
                aspectRatio: "3 / 4",
                // For larger screens, fix the height explicitly.
                height: { xs: "auto", md: 400 },
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
                    p: 1,
                }}
            >
                <Typography variant="h5" sx={{ fontSize: { xs: "1.2rem", md: "inherit" } }}>
                    {project.title}
                </Typography>
            </Box>
        </Box>
    );
};

export default PortfolioItem;
