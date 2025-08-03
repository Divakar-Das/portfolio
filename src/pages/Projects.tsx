import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Github, ExternalLink, X } from 'lucide-react';

// Import project images
import ecommerce1 from '@/assets/projects/ecommerce-1.jpg';
import ecommerce2 from '@/assets/projects/ecommerce-2.jpg';
import weather1 from '@/assets/projects/weather-1.jpg';
import weather2 from '@/assets/projects/weather-2.jpg';
import task1 from '@/assets/projects/task-1.jpg';
import task2 from '@/assets/projects/task-2.jpg';
import portfolio1 from '@/assets/projects/portfolio-1.jpg';
import portfolio2 from '@/assets/projects/portfolio-2.jpg';
import recipe1 from '@/assets/projects/recipe-1.jpg';
import recipe2 from '@/assets/projects/recipe-2.jpg';
import expense1 from '@/assets/projects/expense-1.jpg';
import expense2 from '@/assets/projects/expense-2.jpg';
import movie1 from '@/assets/projects/movie-1.jpg';
import movie2 from '@/assets/projects/movie-2.jpg';
import chat1 from '@/assets/projects/chat-1.jpg';
import chat2 from '@/assets/projects/chat-2.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  images: string[];
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
      fullDescription: 'A full-featured e-commerce platform built with React and modern UI components. Features include product browsing, shopping cart, user authentication, and responsive design. Implemented modern UI/UX principles with smooth animations and intuitive navigation.',
      images: [ecommerce1, ecommerce2],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn/ui'],
      githubLink: 'https://github.com/alexjohnson/ecommerce-platform',
      demoLink: 'https://ecommerce-demo.netlify.app',
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description: 'Real-time weather app with location-based forecasts',
      fullDescription: 'Interactive weather dashboard that provides real-time weather information and 5-day forecasts. Built with React and integrates with OpenWeatherMap API. Features include geolocation support, responsive design, and beautiful weather animations.',
      images: [weather1, weather2],
      technologies: ['React', 'API Integration', 'Responsive Design', 'Chart.js'],
      githubLink: 'https://github.com/alexjohnson/weather-dashboard',
      demoLink: 'https://weather-app-demo.netlify.app',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates',
      fullDescription: 'A comprehensive task management application with features like task creation, assignment, progress tracking, and team collaboration. Built with modern React patterns and state management.',
      images: [task1, task2],
      technologies: ['React', 'State Management', 'Local Storage', 'Drag & Drop'],
      githubLink: 'https://github.com/alexjohnson/task-manager',
      demoLink: 'https://task-manager-demo.netlify.app',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects and skills',
      fullDescription: 'Responsive portfolio website built with React and modern design principles. Features smooth animations, dark theme, and optimized performance. Showcases various projects and technical skills with modern design principles.',
      images: [portfolio1, portfolio2],
      technologies: ['React', 'Tailwind CSS', 'Responsive Design', 'Animations'],
      githubLink: 'https://github.com/alexjohnson/portfolio',
      demoLink: 'https://alex-portfolio.netlify.app',
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'Search and save your favorite recipes with nutritional info',
      fullDescription: 'Recipe discovery application with search functionality, nutritional information, and favorites system. Integrates with recipe APIs and provides detailed cooking instructions.',
      images: [recipe1, recipe2],
      technologies: ['React', 'API Integration', 'Local Storage', 'Search'],
      githubLink: 'https://github.com/alexjohnson/recipe-finder',
      demoLink: 'https://recipe-finder-demo.netlify.app',
    },
    {
      id: 6,
      title: 'Expense Tracker',
      description: 'Personal finance tracker with charts and analytics',
      fullDescription: 'Comprehensive expense tracking application with data visualization, category management, and financial analytics. Built with React and Chart.js for interactive graphs.',
      images: [expense1, expense2],
      technologies: ['React', 'Chart.js', 'Data Visualization', 'Local Storage'],
      githubLink: 'https://github.com/alexjohnson/expense-tracker',
      demoLink: 'https://expense-tracker-demo.netlify.app',
    },
    {
      id: 7,
      title: 'Movie Database',
      description: 'Browse and search movies with detailed information',
      fullDescription: 'Movie discovery platform with search functionality, detailed movie information, ratings, and reviews. Integrates with TMDB API for comprehensive movie data.',
      images: [movie1, movie2],
      technologies: ['React', 'TMDB API', 'Search Functionality', 'Responsive Design'],
      githubLink: 'https://github.com/alexjohnson/movie-database',
      demoLink: 'https://movie-db-demo.netlify.app',
    },
    {
      id: 8,
      title: 'Chat Application',
      description: 'Real-time messaging app with modern UI',
      fullDescription: 'Real-time chat application with user authentication, message history, and responsive design. Built with React and implements modern messaging UI patterns.',
      images: [chat1, chat2],
      technologies: ['React', 'Real-time Features', 'UI/UX', 'WebSocket'],
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
    <div className="min-h-screen pt-20 pb-12 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my frontend development skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group cursor-pointer border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={Boolean(selectedProject)} onOpenChange={handleCloseDialog}>
        <DialogContent className="max-w-4xl max-h-[80vh] mt-16 overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="overflow-y-auto max-h-[calc(80vh-120px)] pr-2">
          
          {selectedProject && (
            <div className="space-y-6">
              {/* Image Carousel */}
              <Carousel className="w-full">
                <CarouselContent>
                  {selectedProject.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`${selectedProject.title} - Screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              {/* Project Description */}
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  variant="outline"
                  className="flex items-center gap-2"
                  asChild
                >
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
                <Button className="flex items-center gap-2" asChild>
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;