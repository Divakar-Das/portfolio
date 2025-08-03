import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
  Zoom,
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Launch as LaunchIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern responsive e-commerce website with shopping cart functionality',
      fullDescription: 'A full-featured e-commerce platform built with React and Material-UI. Features include product browsing, shopping cart, user authentication, and responsive design. Implemented modern UI/UX principles with smooth animations and intuitive navigation.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Material-UI', 'JavaScript', 'CSS3'],
      githubLink: 'https://github.com/alexjohnson/ecommerce-platform',
      demoLink: 'https://ecommerce-demo.netlify.app',
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Real-time weather app with location-based forecasts',
      fullDescription: 'Interactive weather dashboard that provides real-time weather information and 5-day forecasts. Built with React and integrates with OpenWeatherMap API. Features include geolocation support, responsive design, and beautiful weather animations.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'API Integration', 'Responsive Design'],
      githubLink: 'https://github.com/alexjohnson/weather-dashboard',
      demoLink: 'https://weather-app-demo.netlify.app',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates',
      fullDescription: 'A comprehensive task management application with features like task creation, assignment, progress tracking, and team collaboration. Built with modern React patterns and state management.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'State Management', 'Local Storage'],
      githubLink: 'https://github.com/alexjohnson/task-manager',
      demoLink: 'https://task-manager-demo.netlify.app',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects and skills',
      fullDescription: 'Responsive portfolio website built with React and Material-UI. Features smooth animations, dark theme, and optimized performance. Showcases various projects and technical skills with modern design principles.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Material-UI', 'Responsive Design'],
      githubLink: 'https://github.com/alexjohnson/portfolio',
      demoLink: 'https://alex-portfolio.netlify.app',
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'Search and save your favorite recipes with nutritional info',
      fullDescription: 'Recipe discovery application with search functionality, nutritional information, and favorites system. Integrates with recipe APIs and provides detailed cooking instructions.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'API Integration', 'Local Storage'],
      githubLink: 'https://github.com/alexjohnson/recipe-finder',
      demoLink: 'https://recipe-finder-demo.netlify.app',
    },
    {
      id: 6,
      title: 'Expense Tracker',
      description: 'Personal finance tracker with charts and analytics',
      fullDescription: 'Comprehensive expense tracking application with data visualization, category management, and financial analytics. Built with React and Chart.js for interactive graphs.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Chart.js', 'Data Visualization'],
      githubLink: 'https://github.com/alexjohnson/expense-tracker',
      demoLink: 'https://expense-tracker-demo.netlify.app',
    },
    {
      id: 7,
      title: 'Movie Database',
      description: 'Browse and search movies with detailed information',
      fullDescription: 'Movie discovery platform with search functionality, detailed movie information, ratings, and reviews. Integrates with TMDB API for comprehensive movie data.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TMDB API', 'Search Functionality'],
      githubLink: 'https://github.com/alexjohnson/movie-database',
      demoLink: 'https://movie-db-demo.netlify.app',
    },
    {
      id: 8,
      title: 'Chat Application',
      description: 'Real-time messaging app with modern UI',
      fullDescription: 'Real-time chat application with user authentication, message history, and responsive design. Built with React and implements modern messaging UI patterns.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Real-time Features', 'UI/UX'],
      githubLink: 'https://github.com/alexjohnson/chat-app',
      demoLink: 'https://chat-app-demo.netlify.app',
    },
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDialog = () => {
    setSelectedProject(null);
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
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 4 
          }}
        >
          {projects.map((project, index) => (
            <Zoom
              key={project.id}
              in={loaded}
              timeout={400 + index * 100}
            >
              <Card
                sx={{
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
                  border: '1px solid hsl(220, 13%, 18%)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 0 30px hsl(214, 84%, 56%, 0.3)',
                  },
                }}
                onClick={() => handleProjectClick(project)}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    backgroundColor: 'hsl(220, 13%, 15%)',
                    objectFit: 'cover',
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      color: 'primary.main',
                      fontWeight: 600,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: 'text.secondary',
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'hsl(220, 13%, 15%)',
                          color: 'text.primary',
                          border: '1px solid hsl(220, 13%, 20%)',
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Zoom>
          ))}
        </Box>
      </Container>

      {/* Project Detail Dialog */}
      <Dialog
        open={Boolean(selectedProject)}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
            border: '1px solid hsl(220, 13%, 18%)',
            borderRadius: 2,
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'primary.main',
                fontSize: '1.5rem',
                fontWeight: 600,
              }}
            >
              {selectedProject.title}
              <Button
                onClick={handleCloseDialog}
                sx={{ minWidth: 'auto', p: 1 }}
              >
                <CloseIcon />
              </Button>
            </DialogTitle>
            <DialogContent>
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: 'text.primary',
                  lineHeight: 1.6,
                }}
              >
                {selectedProject.fullDescription}
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{ mb: 2, color: 'primary.main' }}
                >
                  Technologies Used:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedProject.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        backgroundColor: 'hsl(220, 13%, 15%)',
                        color: 'text.primary',
                        border: '1px solid hsl(220, 13%, 20%)',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 3, pt: 0 }}>
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                  },
                }}
              >
                View Code
              </Button>
              <Button
                variant="contained"
                startIcon={<LaunchIcon />}
                href={selectedProject.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Projects;