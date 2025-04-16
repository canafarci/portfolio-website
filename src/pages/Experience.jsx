// src/pages/Experience.jsx
import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const Experience = () => {
    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            {/* Teek Games */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Game Developer at Teek Games (2023 - Present)
                </Typography>
                <Typography variant="body1" paragraph>
                    At Teek Games in Istanbul, I serve as a Game Developer responsible for feature development and ongoing maintenance of a casual word puzzle mobile game ("Word Bubbles"). I leverage dependency injection frameworks to build modular, testable software and lead development efforts—including UI design, multiplayer prototyping, and performance optimization. My role also involves coordinating cross-functional teams as a Scrum Master.
                </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Flowtart Studios */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Game Developer at Flowtart Studios (2021 - 2023)
                </Typography>
                <Typography variant="body1" paragraph>
                    At Flowtart Studios in Ankara, I contributed to the development and production of over 30 games. I supported the maintenance and enhancement of a live mobile game with more than 10 million downloads ("City Fighter vs Street Gang"), focusing on rapid prototyping, performance optimization for low-end devices, and efficient version control. I collaborated closely with renowned publishers, implementing agile design patterns and technical improvements.
                </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Diger Yapım A.Ş. */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Game Developer at Diger Yapım A.Ş. (2020 - 2021)
                </Typography>
                <Typography variant="body1" paragraph>
                    At Diger Yapım, I was part of a team that prototyped 15+ games. I implemented robust design patterns, optimized game performance, and created multiplayer experiences using Photon. My responsibilities also included integrating features such as leaderboards and in-app purchases while ensuring clean, maintainable code.
                </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Freelance Developer */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Freelance Developer (2019 - Present)
                </Typography>
                <Typography variant="body1" paragraph>
                    As a Freelance Developer, I have built mobile apps using React Native and developed multiple game prototypes with Unity. Projects have ranged from pseudorandom generation scripts for Adobe Photoshop to porting a VR experience ("Hollow Ocean") for Windows. My work underscores adaptability and a constant drive for innovation.
                </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Freelance Architect */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Freelance Architect (2018 - Present)
                </Typography>
                <Typography variant="body1" paragraph>
                    Parallel to my game development career, I have executed architectural projects using Autodesk 3DSMax, Corona Renderer, and Adobe Photoshop. I create photorealistic façade and interior renders and apply computational design techniques with Grasshopper to craft innovative architectural solutions.
                </Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Education */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Education
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Bachelor’s Degree in Architecture</strong> – Middle Eastern Technical University (METU), Ankara, Turkey (2013-2019)
                    Graduated with Honors, GPA: 3.30; participated in an Erasmus exchange program at Universitat Politècnica de València (GPA: 3.60).
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Master’s Degree in Architecture</strong> – Middle Eastern Technical University (METU), Ankara, Turkey
                    GPA: 4.00. My master’s thesis focused on exploring the impacts of Urban Heat Islands using advanced simulation techniques with Python, TensorFlow, and parametric design in Grasshopper.
                </Typography>
            </Box>
        </Container>
    );
};

export default Experience;
