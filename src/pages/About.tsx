import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Slide,
  Zoom,
} from '@mui/material';
import {
  School as SchoolIcon,
  Code as CodeIcon,
  Psychology as PsychologyIcon,
  Rocket as RocketIcon,
} from '@mui/icons-material';
import { useEffect, useState } from 'react';

const About = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const techStack = {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Material-UI', 'Tailwind CSS'],
    tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Chrome DevTools', 'npm/yarn'],
    learning: ['Node.js', 'Next.js', 'Python', 'MongoDB', 'GraphQL'],
  };

  const interests = [
    'Frontend Development',
    'UI/UX Design',
    'Open Source',
    'Tech Blogging',
    'Problem Solving',
    'Continuous Learning',
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: { xs: 10, md: 12 },
        pb: 8,
        background: 'linear-gradient(135deg, hsl(220, 13%, 8%) 0%, hsl(220, 13%, 10%) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Slide direction="down" in={loaded} timeout={600}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                background: 'linear-gradient(135deg, hsl(214, 84%, 56%), hsl(264, 84%, 56%))',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                fontWeight: 400,
              }}
            >
              Get to know more about my journey and passion for frontend development
            </Typography>
          </Box>
        </Slide>

        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 6,
            mb: 8
          }}
        >
          {/* Personal Story */}
          <Slide direction="right" in={loaded} timeout={800}>
            <Paper
              sx={{
                p: 4,
                height: '100%',
                background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
                border: '1px solid hsl(220, 13%, 18%)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 0 30px hsl(214, 84%, 56%, 0.2)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <PsychologyIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 600 }}>
                  My Story
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                I'm a passionate frontend developer with a strong foundation in modern web technologies. 
                My journey began with curiosity about how websites work, which led me to dive deep into 
                HTML, CSS, and JavaScript.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                I love creating user interfaces that are not only functional but also beautiful and 
                intuitive. Every project is an opportunity to learn something new and push the 
                boundaries of what's possible with code.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.7,
                }}
              >
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through tech blogs and community forums.
              </Typography>
            </Paper>
          </Slide>

          {/* Education & Goals */}
          <Slide direction="left" in={loaded} timeout={800}>
            <Paper
              sx={{
                p: 4,
                height: '100%',
                background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
                border: '1px solid hsl(220, 13%, 18%)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 0 30px hsl(214, 84%, 56%, 0.2)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <SchoolIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 600 }}>
                  Education & Goals
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                <strong>Bachelor's in Computer Science</strong><br />
                XYZ University | 2020-2024<br />
                Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                <strong>Career Goals:</strong><br />
                My goal is to join a dynamic team where I can contribute to meaningful projects 
                while continuing to grow as a developer. I'm particularly interested in companies 
                that value innovation and user experience.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.7,
                }}
              >
                I'm eager to take on challenging projects that will help me develop my skills 
                in modern frontend frameworks and contribute to products that make a real impact.
              </Typography>
            </Paper>
          </Slide>
        </Box>

        {/* Tech Stack Section */}
        <Slide direction="up" in={loaded} timeout={1000}>
          <Box>
            <Typography
              variant="h3"
              sx={{
                mb: 6,
                textAlign: 'center',
                color: 'primary.main',
                fontWeight: 600,
              }}
            >
              Technical Skills
            </Typography>
            
            <Box 
              sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 4,
                mb: 8
              }}
            >
              {/* Frontend Technologies */}
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
                  border: '1px solid hsl(220, 13%, 18%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 0 30px hsl(214, 84%, 56%, 0.2)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <CodeIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 600 }}>
                    Frontend
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {techStack.frontend.map((tech, index) => (
                    <Zoom
                      key={tech}
                      in={loaded}
                      timeout={500 + index * 100}
                    >
                      <Chip
                        label={tech}
                        sx={{
                          backgroundColor: 'hsl(220, 13%, 15%)',
                          color: 'text.primary',
                          border: '1px solid hsl(220, 13%, 20%)',
                          '&:hover': {
                            borderColor: 'primary.main',
                            backgroundColor: 'primary.main',
                            color: 'primary.contrastText',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </Zoom>
                  ))}
                </Box>
              </Paper>

              {/* Tools */}
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
                  border: '1px solid hsl(220, 13%, 18%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 0 30px hsl(214, 84%, 56%, 0.2)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <RocketIcon sx={{ fontSize: 32, color: 'secondary.main', mr: 2 }} />
                  <Typography variant="h5" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                    Tools
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {techStack.tools.map((tool, index) => (
                    <Zoom
                      key={tool}
                      in={loaded}
                      timeout={700 + index * 100}
                    >
                      <Chip
                        label={tool}
                        sx={{
                          backgroundColor: 'hsl(220, 13%, 15%)',
                          color: 'text.primary',
                          border: '1px solid hsl(220, 13%, 20%)',
                          '&:hover': {
                            borderColor: 'secondary.main',
                            backgroundColor: 'secondary.main',
                            color: 'secondary.contrastText',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </Zoom>
                  ))}
                </Box>
              </Paper>

              {/* Currently Learning */}
              <Paper
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
                  border: '1px solid hsl(220, 13%, 18%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 0 30px hsl(214, 84%, 56%, 0.2)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <PsychologyIcon sx={{ fontSize: 32, color: 'warning.main', mr: 2 }} />
                  <Typography variant="h5" sx={{ color: 'warning.main', fontWeight: 600 }}>
                    Learning
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {techStack.learning.map((tech, index) => (
                    <Zoom
                      key={tech}
                      in={loaded}
                      timeout={900 + index * 100}
                    >
                      <Chip
                        label={tech}
                        sx={{
                          backgroundColor: 'hsl(220, 13%, 15%)',
                          color: 'text.primary',
                          border: '1px solid hsl(220, 13%, 20%)',
                          '&:hover': {
                            borderColor: 'warning.main',
                            backgroundColor: 'warning.main',
                            color: 'warning.contrastText',
                          },
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </Zoom>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Box>
        </Slide>

        {/* Interests Section */}
        <Slide direction="up" in={loaded} timeout={1200}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                color: 'primary.main',
                fontWeight: 600,
              }}
            >
              Interests & Hobbies
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
              {interests.map((interest, index) => (
                <Zoom
                  key={interest}
                  in={loaded}
                  timeout={800 + index * 150}
                >
                  <Chip
                    label={interest}
                    sx={{
                      fontSize: '1rem',
                      px: 2,
                      py: 1,
                      backgroundColor: 'hsl(220, 13%, 15%)',
                      color: 'text.primary',
                      border: '1px solid hsl(220, 13%, 20%)',
                      '&:hover': {
                        borderColor: 'primary.main',
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 15px hsl(214, 84%, 56%, 0.3)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  />
                </Zoom>
              ))}
            </Box>
          </Box>
        </Slide>
      </Container>
    </Box>
  );
};

export default About;