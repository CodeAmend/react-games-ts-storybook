import React, { FC } from 'react';
import { Link } from "react-router-dom";

import { ListItem } from './styles';


export enum colorchoice {
  sky = '#79d2e1',
  dullblue = '#b9dcd2',
  tan = '#e0e4cd',
  orange = '#f38631',
  clear = 'transparent'
}

type MenuButtonProps = {
  children: string;
  to: string;
}

const menuitem: FC<MenuButtonProps> = ({ children, to }) => {
  return (
    <Link to={to}>
      <ListItem>{children}</ListItem>
    </Link>
  );
}

export default menuitem;

