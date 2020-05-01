import React, { FC } from 'react';
import { Link } from "react-router-dom";

import { ListItem } from './styles';


export enum ColorChoice {
  sky = '#79D2E1',
  dullblue = '#B9DCD2',
  tan = '#E0E4CD',
  orange = '#F38631',
  clear = 'transparent'
}

type MenuButtonProps = {
  children: string;
  to: string;
}

const MenuItem: FC<MenuButtonProps> = ({ children, to }) => {
  return (
    <Link to={to}>
      <ListItem>{children}</ListItem>
    </Link>
  );
}

export default MenuItem;
