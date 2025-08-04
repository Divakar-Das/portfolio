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
    frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Material UI', 'Bootstrap', 'Responsive Web Design'],
    backend: ['Java ', 'Node.js', 'Express.js', 'RESTful APIs', 'SQL'],
    tools: ['VS Code', 'Eclipse IDE', 'Postman', 'Chrome DevTools', 'SonarQube'],
    versionControl: ['Git', 'GitHub'],
    otherSkills: ['DOM Manipulation', 'API Integration', 'React Hooks', 'JSON'],
    softSkills: ['Problem-Solving', 'Team Collaboration', 'Agile Methodologies', 'Adaptability']
  };


  const categorizedSkills = [
    { title: 'Frontend', icon: <CodeIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />, data: techStack.frontend },
    { title: 'Backend', icon: <CodeIcon sx={{ fontSize: 32, color: 'secondary.main', mr: 2 }} />, data: techStack.backend },
    { title: 'Tools & IDEs', icon: <RocketIcon sx={{ fontSize: 32, color: 'secondary.main', mr: 2 }} />, data: techStack.tools },
    { title: 'Version Control', icon: <RocketIcon sx={{ fontSize: 32, color: 'info.main', mr: 2 }} />, data: techStack.versionControl },
    { title: 'Other Technical Skills', icon: <PsychologyIcon sx={{ fontSize: 32, color: 'warning.main', mr: 2 }} />, data: techStack.otherSkills },
    { title: 'Soft Skills', icon: <PsychologyIcon sx={{ fontSize: 32, color: 'success.main', mr: 2 }} />, data: techStack.softSkills }
  ];



  const groupedInterests = {
    'Tech Interests': [
      'Full Stack Development',
      'Frontend Development',
      'React App Development',
      'Web Development',
      'Software Development',
      'Problem Solving',
      'Continuous Learning',
    ],
    'Hobbies': [
      'Watching Movies',
      'Playing Video Games',
      'Watching Cricket',
      "Playing Cricket",
      "Watching youtube Videos",
    ]
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
              Get to know more about my journey and passion
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
                I’m a BCA graduate with a strong foundation in both frontend and backend technologies. I completed a Java Full Stack Development course at Besant Technologies, where I gained hands-on experience with tools like React, Java, Node.js, and MySQL.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                I also built projects like an Amazon clone and a weather app, which taught me API integration, responsive design, and component-based development. Additionally, I completed a full stack internship where I worked on real-time applications.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.7,
                }}
              >
                I'm now ready to contribute to real-world software solutions by writing clean, efficient, and user-focused code.
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
                <strong>Bachelor's in Computer Application (BCA) </strong><br />
                SASTRA Deemed to be University, Kumbakonam | 2021-2024<br />
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
                My goal is to join a dynamic team where I can contribute to meaningful projects and build scalable, user-focused applications using modern technologies, while continuously growing as a full stack developer.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.7,
                }}
              >
                I'm eager to take on challenging projects that help me grow my skills in modern technologies and contribute to products that create real impact.
              </Typography>
            </Paper>
          </Slide>
        </Box>
        {/* Tech Stack Section */}
        <Slide direction="up" in={loaded} timeout={1000}>

          <Box sx={{ textAlign: 'center' }}>


            <Typography
              variant="h3"
              sx={{
                mb: 4,
                color: 'primary.main',
                fontWeight: 600,
              }}
            >
              Tech Stacks
            </Typography>



            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
                gap: 4,
                mb: 8
              }}
            >

              {categorizedSkills.map((category, index) => (
                <Paper
                  key={category.title}
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
                    {category.icon}
                    <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 600 }}>
                      {category.title}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.data.map((item, i) => (
                      <Zoom key={item} in={loaded} timeout={600 + i * 100}>
                        <Chip
                          label={item}
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
              ))}
            </Box>

          </Box>

        </Slide>

        {/* Interests Section */}
        <Slide direction="up" in={loaded} timeout={1200}>
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

              <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, justifyContent: 'center' }}>
                {Object.entries(groupedInterests).map(([category, items]) => (
                  <Paper
                    key={category}
                    elevation={3}
                    sx={{
                      p: 3,
                      background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
                      border: '1px solid hsl(220, 13%, 18%)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ color: 'primary.main', fontWeight: 600, mb: 2 }}
                    >
                      {category}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                      {items.map((item, index) => (
                        <Zoom key={item} in={loaded} timeout={700 + index * 100}>
                          <Chip
                            label={item}
                            sx={{
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
                  </Paper>
                ))}
              </Box>
            </Box>
          </Slide>

        </Slide>
      </Container>
    </Box>
  );
};

export default About;