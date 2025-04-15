// src/pages/About.jsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h3" gutterBottom>
                About Me
            </Typography>
            <Typography variant="body1" paragraph>
                My name is İsmet Berke Çakır. I have a background in architecture and have been involved in game development and interactive design.
            </Typography>
            <Typography variant="body1" paragraph>
                [Add additional details about yourself here…]
            </Typography>
        </Container>
    );
};

export default About;
