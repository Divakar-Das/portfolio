import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Card,
  CardContent,
  Slide,
  Zoom,
} from '@mui/material';
import {
  Work as WorkIcon,
  School as SchoolIcon,
  CardMembership as CertificateIcon,
  Code as CodeIcon,
} from '@mui/icons-material';
import { useEffect, useState } from 'react';

const Internship = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const experiences = [
    {
      id: 1,
      type: 'Internship',
      company: 'Soft Tech Ashram',
      role: 'Full Stack Developer Trainee Intern',
      duration: 'Feb 2025 - July 2025',
      description:
        'Worked on real-time projects using HTML5, CSS3, React.js, and Material UI. Gained hands-on experience with the basics of Node.js and Express.js. Collaborated in Agile teams through Git workflows, daily stand-ups, sprint planning, and timesheet tracking.',
      technologies: ['React.js', 'JavaScript', 'Material UI', 'GitHub', 'REST APIs', 'Node.js'],
      achievements: [
        'Improved website performance by 30%',
        'Built a responsive Amazon Clone using React and Material UI',
        'Mentored junior students',
        'Practiced collaborative workflows using Git and GitHub',
      ]
    }
    ,
    {
      id: 2,
      type: 'Training',
      company: 'Besant Technologies',
      role: 'Java Full Stack Development',
      duration: 'Aug 2024 - Feb 2025',
      description: 'Gained hands-on experience in core web development technologies including Java, HTML5, CSS3, JavaScript (ES6), and React.js.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Java', 'SQL', 'React'],
      achievements: [
        'Developed a weather app using JavaScript and OpenWeather API',
        'Completed mini-projects involving Java, REST APIs, and SQL',
      ]

    }
  ];

  const certificates = [
    {
      name: 'Full Stack Developer Trainee Certification',
      issuer: 'SoftTechAshram',
      date: 'July 2025',
    },
    {
      name: 'Java Full Stack Developement Certification',
      issuer: 'Besant Technologies',
      date: 'Feb 2025',
    },
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
              Experience & Learning
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
              My journey in professional development and continuous learning
            </Typography>
          </Box>
        </Slide>

        {/* Experience Section */}
        <Slide direction="up" in={loaded} timeout={800}>
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                mb: 6,
                textAlign: 'center',
                color: 'primary.main',
                fontWeight: 600,
              }}
            >
              Professional Experience
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {experiences.map((exp, index) => (
                <Zoom
                  key={exp.id}
                  in={loaded}
                  timeout={600 + index * 200}
                >
                  <Paper
                    sx={{
                      p: 4,
                      background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
                      border: '1px solid hsl(220, 13%, 18%)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 0 30px hsl(214, 84%, 56%, 0.2)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                      {/* Left Side - Icon and Basic Info */}
                      <Box sx={{ minWidth: { md: 300 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          {exp.type === 'Internship' ? (
                            <WorkIcon sx={{ fontSize: 32, color: 'primary.main', mr: 2 }} />
                          ) : (
                            <SchoolIcon sx={{ fontSize: 32, color: 'secondary.main', mr: 2 }} />
                          )}
                          <Chip
                            label={exp.type}
                            sx={{
                              backgroundColor: exp.type === 'Internship' ? 'primary.main' : 'secondary.main',
                              color: 'white',
                              fontWeight: 600,
                            }}
                          />
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{
                            mb: 1,
                            color: 'text.primary',
                            fontWeight: 600,
                          }}
                        >
                          {exp.role}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 1,
                            color: 'primary.main',
                            fontWeight: 500,
                          }}
                        >
                          {exp.company}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            fontWeight: 500,
                          }}
                        >
                          {exp.duration}
                        </Typography>
                      </Box>

                      {/* Right Side - Details */}
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="body1"
                          sx={{
                            mb: 3,
                            color: 'text.primary',
                            lineHeight: 1.6,
                          }}
                        >
                          {exp.description}
                        </Typography>

                        {/* Technologies */}
                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              mb: 2,
                              color: 'primary.main',
                              fontWeight: 600,
                            }}
                          >
                            Technologies Used:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {exp.technologies.map((tech) => (
                              <Chip
                                key={tech}
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
                            ))}
                          </Box>
                        </Box>

                        {/* Achievements */}
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              mb: 2,
                              color: 'secondary.main',
                              fontWeight: 600,
                            }}
                          >
                            Key Achievements:
                          </Typography>
                          <Box component="ul" sx={{ pl: 2, m: 0 }}>
                            {exp.achievements.map((achievement, i) => (
                              <Typography
                                key={i}
                                component="li"
                                variant="body2"
                                sx={{
                                  color: 'text.secondary',
                                  mb: 1,
                                  lineHeight: 1.5,
                                }}
                              >
                                {achievement}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </Zoom>
              ))}
            </Box>
          </Box>
        </Slide>

        {/* Certificates Section */}
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
              Certifications & Courses
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr' },
                gap: 3
              }}
            >
              {certificates.map((cert, index) => (
                <Zoom
                  key={cert.credentialId}
                  in={loaded}
                  timeout={800 + index * 150}
                >
                  <Card
                    sx={{
                      background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
                      border: '1px solid hsl(220, 13%, 18%)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 0 30px hsl(264, 84%, 56%, 0.2)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <CertificateIcon sx={{ fontSize: 28, color: 'secondary.main', mr: 2 }} />
                        <Typography
                          variant="h6"
                          sx={{
                            color: 'text.primary',
                            fontWeight: 600,
                          }}
                        >
                          {cert.name}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 1,
                          color: 'primary.main',
                          fontWeight: 500,
                        }}
                      >
                        {cert.issuer}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 2,
                          color: 'text.secondary',
                        }}
                      >
                        Issued: {cert.date}
                      </Typography>
                    </CardContent>
                  </Card>
                </Zoom>
              ))}
            </Box>
          </Box>
        </Slide>

        {/* Future Goals Section */}
        <Slide direction="up" in={loaded} timeout={1200}>
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Paper
              sx={{
                p: 6,
                background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
                border: '1px solid hsl(220, 13%, 18%)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 0 30px hsl(214, 84%, 56%, 0.3)',
                },
              }}
            >
              <CodeIcon sx={{ fontSize: 48, color: 'primary.main', mb: 3 }} />
              <Typography
                variant="h4"
                sx={{
                  mb: 3,
                  color: 'primary.main',
                  fontWeight: 600,
                }}
              >
                What's Next?
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.primary',
                  lineHeight: 1.7,
                  maxWidth: '800px',
                  mx: 'auto',
                  mb: 3,
                }}
              >
               I'm actively seeking opportunities to apply my full stack development skills in a professional environment. My goal is to contribute to impactful software projects while continuing to grow as a developer. I'm particularly interested in roles that involve modern React development, backend integration, and collaborative team-based problem solving.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'secondary.main',
                  fontWeight: 500,
                }}
              >
                Ready to bring fresh perspectives and dedication to your team!
              </Typography>
            </Paper>
          </Box>
        </Slide>
      </Container>
    </Box>
  );
};

export default Internship;