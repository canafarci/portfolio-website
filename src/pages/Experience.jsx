// src/pages/Experience.jsx
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Experience = () => {
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h3" gutterBottom>
                Experience
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="body1">
                    [Insert your professional experience details here…]
                </Typography>
            </Box>
        </Container>
    );
};

export default Experience;
