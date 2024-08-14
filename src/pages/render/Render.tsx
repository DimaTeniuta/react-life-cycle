import { Stack } from '@mui/material';
import { ConsoleLog } from '../../components/ui/console-log';
import { FunctionDeclaration } from '../../components/ui/function';

const HomePage = () => {
  return (
    <Stack>
      <ConsoleLog>12</ConsoleLog>
      <FunctionDeclaration tabsLength={2} name="B" args={'12'}>
        <ConsoleLog tabsLength={2}>12</ConsoleLog>
      </FunctionDeclaration>
    </Stack>
  );
};

export default HomePage;
