import { createTheme } from '@mui/material';

export const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#B392F0'
    },
    secondary: {
      main: '#79B8FF',
      light: '#34516e'
    },
    warning: {
      main: '#FFAB70'
    },
    error: {
      main: '#F97583'
    },
    text: {
      primary: '#E1E4E8'
    },
    background: {
      default: '#24292e'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0
        },
        body: {
          minWidth: 320,
          backgroundColor: '#0d1117'
        }
      }
    }
  }
});
