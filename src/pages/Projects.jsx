import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Chip,
  Slide,
  Stack,
} from '@mui/material';
import { Github, ExternalLink, Calendar1 } from 'lucide-react';

import ecommerce1 from '@/assets/projects/ecommerce-1.png';
import ecommerce2 from '@/assets/projects/ecommerce-2.png';
import ecommerce3 from '@/assets/projects/ecommerce-3.png';
import ecommerce4 from '@/assets/projects/ecommerce-4.png';

import crud1 from "@/assets/projects/crud1.png"
import crud2 from "@/assets/projects/crud2.png"
import crud3 from "@/assets/projects/crud3.png"
import crud4 from "@/assets/projects/crud4.png"

import calendar1 from "@/assets/projects/calendar1.png"
import calendar2 from "@/assets/projects/calendar2.png"
import calendar3 from "@/assets/projects/calendar3.png"
import calendar4 from "@/assets/projects/calendar4.png"

import xo1 from "@/assets/projects/xo1.png"
import xo2 from "@/assets/projects/xo2.png"
import xo3 from "@/assets/projects/xo3.png"
import xo4 from "@/assets/projects/xo4.png"

import rps1 from "@/assets/projects/rps1.png"

import { StackedBarChartRounded } from '@mui/icons-material';


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Amazon-Clone-Ecommerce-Website',
      description: 'Built a fully responsive e-commerce website inspired by Amazon using React and Material UI for a clean, modern UI.',
      fullDescription: 'Implemented sign-up and login forms with regex validation to ensure proper user input.Used Redux for global state management (e.g., user info, product data). Integrated APIs using Axios, and added interceptors to manage loading screens and handle request errors.Applied lazy loading to improve performance by loading components only when needed.Created structured category and subcategory views for better product navigation. Designed with mobile-first principles to ensure smooth use across all devices.',
      images: [ecommerce1, ecommerce2, ecommerce3, ecommerce4],
      technologies: ['React', 'Material UI', 'JavaScript', 'HTML/CSS', 'Redux', 'axios', 'REST APIs'],
      githubLink: 'https://github.com/Divakar-Das/amozon',
      demoLink: 'https://ecommerce-amozon.netlify.app/landing',
    },
    {
      id: 2,
      title: 'Javascript CRUD',
      description: 'This project has strong logical code. I have included regular expressions (regex) for validating input fields. You can store images and all other data into local storage.',
      fullDescription: 'This project demonstrates my understanding of JavaScript logic, local storage usage, and form validation techniques. It’s a great example of how to build a dynamic and interactive web application without using a backend. The update and delete features help manage the data efficiently, making it user-friendly and practical for real-time use.',
      images: [crud1, crud2, crud3, crud4],
      technologies: ['JavaScript', 'HTML/CSS', 'Responsive Design', 'localstorage'],
      githubLink: 'https://github.com/Divakar-Das/javascript_CRUD',
      demoLink: 'https://javascriptcrudop.netlify.app/',
    },
    {
      id: 3,
      title: 'Clinic Calendar App - React Project',
      description: 'Developed a responsive and user-friendly clinic scheduling app using React and JavaScript',
      fullDescription: 'Dynamic calendar with daily, weekly, and monthly views Appointment booking and scheduling Clean and intuitive UI/UX Fully responsive design for mobile and desktop',
      images: [calendar2, calendar1, calendar3, calendar4],
      technologies: ['React', 'Material UI', 'JavaScript', 'React-Calender-Library', 'Local Storage'],
      githubLink: 'https://github.com/Divakar-Das/clinic-calendar-app',
      demoLink: 'https://task-manager-demo.netlify.app',
    },
    {
      id: 4,
      title: 'Tic Tac Toe',
      description: 'Built a Tic Tac Toe game with a sleek and modern design using HTML, CSS, and JavaScript!',
      fullDescription: 'XO Game is a responsive web-based Tic-Tac-Toe application built using HTML, CSS, and JavaScript. It allows two players to take turns placing X and O in a 3x3 grid with instant win/tie detection. The layout adjusts smoothly across all screen sizes for an engaging user experience.',
      images: [xo1, xo2, xo3, xo4],
      technologies: ['JavaScript', 'HTML', 'CSS', 'Game Logics'],
      githubLink: 'https://github.com/Divakar-Das/FrontendDevelopment/tree/main/xo',
      demoLink: 'https://xo3301.netlify.app',
    },
    {
      id: 5,
      title: 'Rock Paper Scissor',
      description: 'A responsive Rock Paper Scissors game built with HTML, CSS, and JavaScript featuring an attractive theme and smooth gameplay.',
      fullDescription: 'This is a visually appealing Rock Paper Scissors game developed using HTML, CSS, and JavaScript. It includes animations, instant result logic, and a clean, responsive layout. Designed to provide an engaging and fun user experience across all devices.',
      images: [rps1],
      technologies: ['JavaScript', 'HTML', 'CSS', 'Game Logics'],
      githubLink: 'https://github.com/Divakar-Das/FrontendDevelopment/tree/main/rps',
      demoLink: 'https://rps3301.netlify.app/',
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', pt: 10, pb: 8, bgcolor: '#0e0f11' }}>
      <Container maxWidth="lg">
        <Slide direction="down" in={loaded} timeout={600}>
          <Box textAlign="center" mb={6}>
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
              My Projects
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                fontWeight: 400,
                padding: "0 5px",
              }}
            >
              A collection of projects showcasing my development skills
            </Typography>
          </Box>
        </Slide>
        <Box
          sx={{
            display: 'grid',
            gap: '50px',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              lg: '1fr 1fr 1fr'
            },
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={6} key={project.id}>
              <Card
                sx={{
                  backgroundColor: '#151618',
                  color: '#fff',
                  cursor: 'pointer',
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
                }}
                onClick={() => setSelectedProject(project)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.images[0]}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {project.description}
                  </Typography>
                  <Box mt={2} display="flex" gap={1} flexWrap="wrap">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Chip key={tech} label={tech} size="small" />
                    ))}
                    {project.technologies.length > 3 && (
                      <Chip label={`+${project.technologies.length - 3}`} size="small" />
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Box>

        <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)} maxWidth="md" fullWidth>
          {selectedProject && (
            <DialogContent sx={{ bgcolor: '#1a1b1e', color: '#fff' }}>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <Box sx={{
                // display: "grid",
                // gridTemplateColumns: {
                //   xs: "1fr",
                //   sm: "1fr 1fr",
                // },
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "start",
                alignItems: "center",
                gap: " 15px 30px",
                placeContent: "center"
              }} spacing={2}>
                {selectedProject.images.map((img, idx) => (
                  <Grid item xs={6} key={idx}>
                    <Box
                      component="img"
                      src={img}
                      alt={selectedProject.title}
                      sx={{
                        width: { xs: "auto", md: 300 },
                        height: { xs: 200, md: 170 },
                        objectFit: { xs: "cover", md: "contain" },
                        background: "#000000d0",
                        borderRadius: 1,
                        border: '2px solid #ccc',
                        display: 'block',
                        maxWidth: '100%',
                        mx: 'auto',
                      }}
                    />
                  </Grid>
                ))}
              </Box>
              <Box mt={2}>
                <Typography variant="body1" color="gray">
                  {selectedProject.fullDescription}
                </Typography>
              </Box>
              <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
                {selectedProject.technologies.map((tech) => (
                  <Chip key={tech} label={tech} />
                ))}
              </Box>
              <Box mt={3} display="flex" gap={2}>
                <Button
                  sx={{
                    padding: { xs: "5px 10px" },
                  }}
                  variant="outlined"
                  color="primary"
                  href={selectedProject.githubLink}
                  target="_blank"
                  startIcon={<Github size={18} />}
                >
                  View Code
                </Button>
                <Button
                  sx={{
                    padding: { xs: "5px 10px" }
                  }}
                  variant="contained"
                  color="primary"
                  href={selectedProject.demoLink}
                  target="_blank"
                  startIcon={<ExternalLink size={18} />}
                >
                  Live Demo
                </Button>
              </Box>
            </DialogContent>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default Projects;
