// src/pages/Portfolio.jsx
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import PortfolioItem from '../components/PortfolioItem';
import { contentData } from '../data/contentData';

const Portfolio = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2} justifyContent="center">
                {contentData.map((project, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                        // Center the content within each Grid item
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <PortfolioItem project={project} id={index} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Portfolio;
