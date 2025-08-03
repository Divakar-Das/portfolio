import { createTheme } from '@mui/material/styles';

export const portfolioTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'hsl(214, 84%, 56%)', // Professional blue
      light: 'hsl(214, 84%, 66%)',
      dark: 'hsl(214, 84%, 46%)',
    },
    secondary: {
      main: 'hsl(264, 84%, 56%)', // Purple accent
      light: 'hsl(264, 84%, 66%)',
      dark: 'hsl(264, 84%, 46%)',
    },
    background: {
      default: 'hsl(220, 13%, 8%)', // Dark background
      paper: 'hsl(220, 13%, 11%)', // Card background
    },
    text: {
      primary: 'hsl(210, 40%, 98%)',
      secondary: 'hsl(215, 20.2%, 65.1%)',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
          border: '1px solid hsl(220, 13%, 18%)',
          borderRadius: '12px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 0 30px hsl(214, 84%, 56%, 0.3)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 500,
          padding: '12px 24px',
        },
        contained: {
          background: 'linear-gradient(135deg, hsl(214, 84%, 56%), hsl(264, 84%, 56%))',
          boxShadow: '0 4px 14px 0 hsl(214, 84%, 56%, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, hsl(214, 84%, 66%), hsl(264, 84%, 66%))',
            boxShadow: '0 6px 20px 0 hsl(214, 84%, 56%, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, hsl(220, 13%, 11%), hsl(220, 13%, 13%))',
          border: '1px solid hsl(220, 13%, 18%)',
          color: 'hsl(210, 40%, 98%)',
          '&:hover': {
            boxShadow: '0 0 20px hsl(264, 84%, 56%, 0.2)',
            borderColor: 'hsl(264, 84%, 56%)',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});