// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { contentData } from "../data/contentData";

const ProjectDetail = () => {
    const { id } = useParams();
    const project = contentData[id]; // In a production app, use a unique id

    if (!project) {
        return (
            <Container sx={{ mt: 4 }}>
                <Typography variant="h5">Project not found.</Typography>
            </Container>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    height: { xs: 300, md: 500 },
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        p: 3,
                    }}
                >
                    <Typography variant="h2" color="white" gutterBottom>
                        {project.title}
                    </Typography>
                    {/* Optionally, add a short tagline or date */}
                </Box>
            </Box>

            {/* Detailed Content */}
            <Container sx={{ mt: 4, mb: 4 }}>
                <Typography variant="body1" paragraph>
                    {project.detailed_description || project.description}
                </Typography>
                {/*
          Optionally, you can display additional images or multimedia content here.
          For now, we display nothing more.
        */}
            </Container>
        </>
    );
};

export default ProjectDetail;
