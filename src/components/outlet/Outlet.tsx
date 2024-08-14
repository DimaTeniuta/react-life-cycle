import { CircularProgress } from '@mui/material';
import { Suspense } from 'react';
import { Outlet as RouterOutlet } from 'react-router-dom';

export const Outlet = () => {
  return (
    <Suspense fallback={<CircularProgress size="small" />}>
      <RouterOutlet />
    </Suspense>
  );
};
