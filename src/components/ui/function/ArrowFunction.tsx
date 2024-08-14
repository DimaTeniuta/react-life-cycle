import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  tabsLength?: number;
}

export const ArrowFunction = ({}: IProps) => {
  return <div>ArrowFunction</div>;
};
