import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
