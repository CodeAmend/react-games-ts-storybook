import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


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

const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  position: relative;
  display:flex;

  min-width: 250px;

  border: 4px solid black;

  padding: 0.5rem 1rem;

  color: black;
  background-color: white;

  & + & {
    margin-left: 1rem;
  }

  &:hover {
    color: white;
    background-color: black;
  }

  &::after {
    content: '#';
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const MenuItem: FC<MenuButtonProps> = ({ children, to }) => {
  return (
    <Link to={to}>
      <ListItem>{children}</ListItem>
    </Link>
  );
}

export default MenuItem;
