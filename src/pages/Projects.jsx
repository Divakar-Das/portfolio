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
import { Github, ExternalLink } from 'lucide-react';

import ecommerce1 from '@/assets/projects/ecommerce-1.jpg';
import ecommerce2 from '@/assets/projects/ecommerce-2.jpg';
import ecommerce3 from '@/assets/projects/ecommerce-3.jpg';
import ecommerce4 from '@/assets/projects/ecommerce-4.jpg';
import weather1 from '@/assets/projects/weather-1.jpg';
import weather2 from '@/assets/projects/weather-2.jpg';
import weather3 from '@/assets/projects/weather-3.jpg';
import weather4 from '@/assets/projects/weather-4.jpg';
import task1 from '@/assets/projects/task-1.jpg';
import task2 from '@/assets/projects/task-2.jpg';
import task3 from '@/assets/projects/task-3.jpg';
import task4 from '@/assets/projects/task-4.jpg';
import portfolio1 from '@/assets/projects/portfolio-1.jpg';
import portfolio2 from '@/assets/projects/portfolio-2.jpg';
import portfolio3 from '@/assets/projects/portfolio-3.jpg';
import portfolio4 from '@/assets/projects/portfolio-4.jpg';
import recipe1 from '@/assets/projects/recipe-1.jpg';
import recipe2 from '@/assets/projects/recipe-2.jpg';
import recipe3 from '@/assets/projects/recipe-3.jpg';
import recipe4 from '@/assets/projects/recipe-4.jpg';
import expense1 from '@/assets/projects/expense-1.jpg';
import expense2 from '@/assets/projects/expense-2.jpg';
import expense3 from '@/assets/projects/expense-3.jpg';
import expense4 from '@/assets/projects/expense-4.jpg';
import movie1 from '@/assets/projects/movie-1.jpg';
import movie2 from '@/assets/projects/movie-2.jpg';
import movie3 from '@/assets/projects/movie-3.jpg';
import movie4 from '@/assets/projects/movie-4.jpg';
import chat1 from '@/assets/projects/chat-1.jpg';
import chat2 from '@/assets/projects/chat-2.jpg';
import chat3 from '@/assets/projects/chat-3.jpg';
import chat4 from '@/assets/projects/chat-4.jpg';
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
      title: 'E-Commerce Platform',
      description: 'Modern responsive e-commerce website with shopping cart functionality',
      fullDescription: 'A full-featured e-commerce platform built with React...',
      images: [ecommerce1, ecommerce2, ecommerce3, ecommerce4],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn/ui'],
      githubLink: 'https://github.com/alexjohnson/ecommerce-platform',
      demoLink: 'https://ecommerce-demo.netlify.app',
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Real-time weather app with location-based forecasts',
      fullDescription: 'Interactive weather dashboard that provides real-time weather information...',
      images: [weather1, weather2, weather3, weather4],
      technologies: ['React', 'API Integration', 'Responsive Design', 'Chart.js'],
      githubLink: 'https://github.com/alexjohnson/weather-dashboard',
      demoLink: 'https://weather-app-demo.netlify.app',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates',
      fullDescription: 'A comprehensive task management application with features like task creation...',
      images: [task1, task2, task3, task4],
      technologies: ['React', 'State Management', 'Local Storage', 'Drag & Drop'],
      githubLink: 'https://github.com/alexjohnson/task-manager',
      demoLink: 'https://task-manager-demo.netlify.app',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects and skills',
      fullDescription: 'Responsive portfolio website built with React...',
      images: [portfolio1, portfolio2, portfolio3, portfolio4],
      technologies: ['React', 'Tailwind CSS', 'Responsive Design', 'Animations'],
      githubLink: 'https://github.com/alexjohnson/portfolio',
      demoLink: 'https://alex-portfolio.netlify.app',
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'Search and save your favorite recipes with nutritional info',
      fullDescription: 'Recipe discovery application with search functionality...',
      images: [recipe1, recipe2, recipe3, recipe4],
      technologies: ['React', 'API Integration', 'Local Storage', 'Search'],
      githubLink: 'https://github.com/alexjohnson/recipe-finder',
      demoLink: 'https://recipe-finder-demo.netlify.app',
    },
    {
      id: 6,
      title: 'Expense Tracker',
      description: 'Personal finance tracker with charts and analytics',
      fullDescription: 'Comprehensive expense tracking application with data visualization...',
      images: [expense1, expense2, expense3, expense4],
      technologies: ['React', 'Chart.js', 'Data Visualization', 'Local Storage'],
      githubLink: 'https://github.com/alexjohnson/expense-tracker',
      demoLink: 'https://expense-tracker-demo.netlify.app',
    },
    {
      id: 7,
      title: 'Movie Database',
      description: 'Browse and search movies with detailed information',
      fullDescription: 'Movie discovery platform with search functionality...',
      images: [movie1, movie2, movie3, movie4],
      technologies: ['React', 'TMDB API', 'Search Functionality', 'Responsive Design'],
      githubLink: 'https://github.com/alexjohnson/movie-database',
      demoLink: 'https://movie-db-demo.netlify.app',
    },
    {
      id: 8,
      title: 'Chat Application',
      description: 'Real-time messaging app with modern UI',
      fullDescription: 'Real-time chat application with user authentication...',
      images: [chat1, chat2, chat3, chat4],
      technologies: ['React', 'Real-time Features', 'UI/UX', 'WebSocket'],
      githubLink: 'https://github.com/alexjohnson/chat-app',
      demoLink: 'https://chat-app-demo.netlify.app',
    },
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
              }}
            >
              A collection of projects showcasing my frontend development skills
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
                display:"grid",
                gridTemplateColumns:{
                  xs:"1fr",
                  sm:"1fr 1fr",
                  lg:"1fr 1fr 1fr"
                },
                justifyContent: "center",
                alignItems: "center",
                gap:"10px"
              }} spacing={2}>
                {selectedProject.images.map((img, idx) => (
                  <Grid item xs={6} key={idx}>
                    <img src={img} alt={selectedProject.title} style={{ width: '100%',height:"30vh",objectFit:"cover", borderRadius: 8 }} />
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
                  variant="outlined"
                  color="primary"
                  href={selectedProject.githubLink}
                  target="_blank"
                  startIcon={<Github size={18} />}
                >
                  View Code
                </Button>
                <Button
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
