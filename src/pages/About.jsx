// src/pages/About.jsx
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const About = () => {
    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Box>
                <Typography variant="body1" paragraph>
                    I’m <strong>İsmet Berke Çakır</strong>, a versatile game developer and architect.
                    With over 4 years of Unity3D development experience, I combine a strong technical
                    background with a creative approach to design and interactive experiences. I am
                    passionate about software design, rapid prototyping, and performance optimization—
                    always striving to produce maintainable, efficient, and engaging solutions.
                </Typography>
                <Typography variant="body1" paragraph>
                    Throughout my career, I have worked at renowned companies such as Teek Games,
                    Flowtart Studios Yazılım Limited Şirketi, and Diger Yapım A.Ş. In these roles,
                    I contributed to feature development, multiplayer prototyping, UI design, and
                    maintenance for hit mobile games. My freelance work spans mobile app development,
                    game development, and architectural design, allowing me to merge cutting‐edge
                    technology with design principles.
                </Typography>
                <Typography variant="body1" paragraph>
                    I am proficient in a range of languages and tools including C#, Python, and
                    JavaScript, and I regularly use software like Autodesk 3DSMax, Corona Renderer,
                    and Adobe Photoshop. My experience also extends to agile development practices,
                    technical documentation, and the use of dependency injection frameworks (such as
                    Zenject and VContainer) to create modular and testable code.
                </Typography>
                <Typography variant="body1" paragraph>
                    Academically, I hold a Bachelor’s degree in Architecture from Middle Eastern
                    Technical University (METU) where I graduated with honors (GPA 3.30) and
                    participated in the Erasmus Exchange Program at Universitat Politècnica de
                    València (GPA 3.60). I also completed a Master’s degree in Architecture at METU
                    with a GPA of 4.00, focusing on advanced simulation methods for urban heat island
                    analysis using Python, TensorFlow, and generative adversarial networks.
                </Typography>

                {/* Contact Section */}
                <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        Phone: +90 506 934 84 39
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        Email: ismetberke@gmail.com
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default About;
