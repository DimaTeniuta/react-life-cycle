import { Box, Stack, Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  tabsLength?: number;
  name: string;
  args?: string;
}

export const FunctionDeclaration = ({ children, args, name, tabsLength }: IProps) => {
  return (
    <Stack direction="row" alignItems="center" width="100%">
      <Stack direction="row" gap={1}>
        {tabsLength !== undefined &&
          Array(tabsLength * 2)
            .fill('')
            .map((_, index) => <Typography key={index}>&nbsp;</Typography>)}
      </Stack>

      <Stack width="100%">
        <Stack direction="row" gap={1} alignItems="center">
          <Typography component="span" color="error">
            function
          </Typography>

          <Stack direction="row">
            <Typography component="span">{name}</Typography>
            <Typography component="span">
              (
              <Typography component="span" color="secondary">
                {args}
              </Typography>
              )
            </Typography>
          </Stack>
          <Typography component="span">{'{'}</Typography>
        </Stack>

        <Box>{children}</Box>

        <Typography component="span">{'}'}</Typography>
      </Stack>
    </Stack>
  );
};
