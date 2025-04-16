// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import {
    Box,
    Container,
    Typography,
    Grid,
    Button,
    ImageList,
    ImageListItem,
} from "@mui/material";
import { contentData } from "../data/contentData";

const ProjectDetail = () => {
    const { id } = useParams();
    const project = contentData[id]; // In production, use a proper unique identifier

    if (!project) {
        return (
            <Container sx={{ mt: 4 }}>
                <Typography variant="h5">Project not found.</Typography>
            </Container>
        );
    }

    // horizontalImages: true means images are portrait (vertical) mode.
    // We'll use this flag to determine how many columns to show.
    const isPortrait = project.horizontalImages;

    return (
        <>
            {/* HERO SECTION */}
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
                        bgcolor: "rgba(0, 0, 0, 0.6)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        px: 2,
                    }}
                >
                    <Typography
                        variant="h2"
                        color="white"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                    >
                        {project.title}
                    </Typography>
                    {project.description && (
                        <Typography variant="h6" color="white">
                            {project.description}
                        </Typography>
                    )}
                </Box>
            </Box>

            {/* EXTERNAL LINKS (BUTTONS) */}
            <Container sx={{ mt: 2 }}>
                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        justifyContent: "center",
                        flexWrap: "wrap",
                        mb: 3,
                    }}
                >
                    {project.google_play_link && (
                        <Button
                            variant="contained"
                            color="primary"
                            component="a"
                            href={project.google_play_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ textTransform: "none", fontSize: "1rem" }}
                        >
                            Google Play
                        </Button>
                    )}
                    {project.app_store_link && (
                        <Button
                            variant="contained"
                            color="primary"
                            component="a"
                            href={project.app_store_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ textTransform: "none", fontSize: "1rem" }}
                        >
                            App Store
                        </Button>
                    )}
                    {project.github_link && (
                        <Button
                            variant="contained"
                            color="secondary"
                            component="a"
                            href={project.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ textTransform: "none", fontSize: "1rem" }}
                        >
                            GitHub
                        </Button>
                    )}
                    {project.behance_link && (
                        <Button
                            variant="contained"
                            color="secondary"
                            component="a"
                            href={project.behance_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ textTransform: "none", fontSize: "1rem" }}
                        >
                            Behance
                        </Button>
                    )}
                </Box>
            </Container>

            {/* MAIN CONTENT SECTION */}
            <Container sx={{ mt: 2, mb: 4 }}>
                {/* Description & Details */}
                <Box sx={{ mb: 4 }}>
                    {project.date && (
                        <>
                            <Typography variant="h5" gutterBottom>
                                Date
                            </Typography>
                            <Typography variant="body1" paragraph>
                                {project.date}
                            </Typography>
                        </>
                    )}
                    {project.detailed_description && (
                        <>
                            <Typography variant="h5" gutterBottom>
                                Details
                            </Typography>
                            <Typography variant="body1" paragraph>
                                {project.detailed_description}
                            </Typography>
                        </>
                    )}
                </Box>

                {/* Technical Details */}
                <Grid container spacing={2} sx={{ mb: 4 }}>
                    {project.skills && (
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Skills</Typography>
                            <Typography variant="body1">{project.skills}</Typography>
                        </Grid>
                    )}
                    {project.genre && (
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Genre</Typography>
                            <Typography variant="body1">{project.genre}</Typography>
                        </Grid>
                    )}
                    {project.job_type && (
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Job Type</Typography>
                            <Typography variant="body1">{project.job_type}</Typography>
                        </Grid>
                    )}
                    {project.role && (
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6">Role</Typography>
                            <Typography variant="body1">{project.role}</Typography>
                        </Grid>
                    )}
                    {project.location && (
                        <Grid item xs={12}>
                            <Typography variant="h6">Location</Typography>
                            <Typography variant="body1">{project.location}</Typography>
                        </Grid>
                    )}
                </Grid>

                {/* Multimedia Section: Video */}
                {project.videoUrl && (
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" gutterBottom>
                            Video
                        </Typography>
                        <Box
                            sx={{
                                position: "relative",
                                pb: "56.25%", // 16:9 aspect ratio
                                height: 0,
                                overflow: "hidden",
                            }}
                        >
                            <iframe
                                title="Project Video"
                                src={project.videoUrl}
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                }}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </Box>
                    </Box>
                )}

                {/* Multimedia Section: WebGL */}
                {project.webGLUrl && (
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" gutterBottom>
                            WebGL Experience
                        </Typography>
                        <Box
                            sx={{
                                position: "relative",
                                pb: "56.25%",
                                height: 0,
                                overflow: "hidden",
                            }}
                        >
                            <iframe
                                title="WebGL Experience"
                                src={project.webGLUrl}
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                }}
                                frameBorder="0"
                            ></iframe>
                        </Box>
                    </Box>
                )}

                {/* Gallery Section using Material-UI's ImageList */}
                {project.images && project.images.length > 0 && (
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h5" gutterBottom>
                            Gallery
                        </Typography>
                        <ImageList variant="standard" cols={isPortrait ? 3 : 1} gap={8}>
                            {project.images.map((imgUrl, idx) => (
                                <ImageListItem key={idx}>
                                    <img
                                        src={imgUrl}
                                        alt={`${project.title} ${idx + 1}`}
                                        loading="lazy"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            objectFit: "contain",
                                        }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                )}

            </Container>
        </>
    );
};

export default ProjectDetail;
