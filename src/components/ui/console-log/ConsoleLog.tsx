import { Typography, Stack, Box } from '@mui/material';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  tabsLength?: number;
  onClick?: () => void;
}

export const ConsoleLog = ({ children, tabsLength, onClick }: IProps) => {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.light',
        cursor: 'pointer',
        '&:hover': {
          opacity: 0.7
        }
      }}
      onClick={onClick}
    >
      <Stack direction="row" alignContent="center">
        <Stack direction="row" gap={1}>
          {tabsLength !== undefined &&
            Array(tabsLength * 2)
              .fill('')
              .map((_, index) => <Typography key={index}>&nbsp;</Typography>)}
        </Stack>
        <Typography component="span">
          console.
          <Typography component="span" color="primary">
            log
          </Typography>
          <Typography component="span">
            (
            <Typography component="span" color="secondary">
              {children}
            </Typography>
            )
          </Typography>
        </Typography>
      </Stack>
    </Box>
  );
};
