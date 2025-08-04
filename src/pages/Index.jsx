import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Avatar,
  Paper,
  Slide,
  Zoom,
} from '@mui/material';
import {
  Download as DownloadIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import profilePhoto from '@/assets/profile-photo.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const skills = [
    'React', 'HTML5', 'CSS3', 'JavaScript', 'GitHub', 'Material-UI', 'Java', 'Responsive Design', 'SQL', 'Node', 'VS Code', 'Eclipse IDE', 'Bootstrap', 'Express.js'
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Divakar_Resume.pdf';
    link.download = 'Divakar_Resume.pdf';
    link.click();
  };

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
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: 'center',
            gap: 6,
            mb: 8
          }}
        >

          {/* Profile Section */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Slide direction="right" in={loaded} timeout={800}>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    mb: 2,
                    background: 'linear-gradient(135deg, hsl(214, 84%, 56%), hsl(264, 84%, 56%))',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                  }}
                >
                  Hi, I'm Divakar
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                    Width: '500px',
                    fontSize: '1.1rem',
                  }}
                >
                  Full Stack Web Developer | React & Frontend Specialist | Open to Software Opportunities
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    mb: 3,
                    color: 'text.primary',
                    fontWeight: 400,
                    textAlign: "start",
                    fontSize: { xs: '1rem', md: '1.3rem' },
                  }}
                >
                  BCA graduate with hands-on experience in React.js, JavaScript, Java, and Node.js. Proficient in building scalable, responsive web applications and integrating RESTful APIs. Passionate about crafting clean UI and writing maintainable code
                </Typography>


                {/* Skills */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                    Tech Stack
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skills.map((skill, index) => (
                      <Zoom
                        key={skill}
                        in={loaded}
                        timeout={300 + index * 100}
                      >
                        <Chip
                          label={skill}
                          sx={{
                            background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
                            border: '1px solid hsl(220, 13%, 18%)',
                            color: 'text.primary',
                            '&:hover': {
                              boxShadow: '0 0 20px hsl(264, 84%, 56%, 0.2)',
                              borderColor: 'secondary.main',
                              transform: 'translateY(-2px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        />
                      </Zoom>
                    ))}
                  </Box>
                </Box>

                {/* Resume Button */}
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<DownloadIcon />}
                  onClick={handleResumeDownload}
                  sx={{
                    mb: 4,
                    fontSize: '1.1rem',
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Download My Resume
                </Button>
              </Box>
            </Slide>
          </Box>

          {/* Profile Photo */}
          <Box sx={{ flex: { md: 1 } }}>
            <Slide direction="left" in={loaded} timeout={1000}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar
                  src={profilePhoto}
                  alt="Profile Photo"
                  sx={{
                    width: { xs: 250, md: 300 },
                    height: { xs: 250, md: 300 },
                    border: '4px solid',
                    borderColor: 'primary.main',
                    boxShadow: '0 0 30px hsl(214, 84%, 56%, 0.3)',
                    transition: 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 0 40px hsl(264, 84%, 56%, 0.4)',
                    },
                  }}
                />
              </Box>
            </Slide>
          </Box>
        </Box>

        {/* Contact Information */}
        <Slide direction="up" in={loaded} timeout={1200}>
          <Box>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                textAlign: 'center',
                color: 'primary.main',
                fontWeight: 600,
              }}
            >
              Let's Connect
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 3,
                justifyContent: 'center'
              }}
            >
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
                  border: '1px solid hsl(220, 13%, 18%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 0 30px hsl(214, 84%, 56%, 0.2)',
                  },
                }}
              >
                <EmailIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1, color: 'text.primary' }}>
                  Email
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  <a href="mailto:divakar07n@gmail.com">divakar07n@gmail.com</a>
                </Typography>
              </Paper>

              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
                  border: '1px solid hsl(220, 13%, 18%)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 0 30px hsl(214, 84%, 56%, 0.2)',
                  },
                }}
              >
                <PhoneIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1, color: 'text.primary' }}>
                  Phone
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  <a href="tel:9944176506">+91-9944176506</a>
                </Typography>
              </Paper>

              <Paper
                component="a"
                href="https://linkedin.com/in/divakar07"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  p: 3,
                  textAlign: 'center',
                  background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
                  border: '1px solid hsl(220, 13%, 18%)',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 0 30px hsl(214, 84%, 56%, 0.2)',
                  },
                }}
              >
                <LinkedInIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1, color: 'text.primary' }}>
                  LinkedIn
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  linkedin.com/in/divakar07 
                </Typography>
              </Paper>
              <Paper
                component="a"
                href="https://github.com/Divakar-Das"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  p: 3,
                  textAlign: 'center',
                  background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
                  border: '1px solid hsl(220, 13%, 18%)',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 0 30px hsl(214, 84%, 56%, 0.2)',
                  },
                }}
              >
                <GitHubIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 1, color: 'text.primary' }}>
                  GitHub
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                   github.com/Divakar-Das
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Slide>
      </Container>
    </Box>
  );
};

export default Index;