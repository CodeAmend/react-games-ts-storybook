import React, { FC } from 'react';
import styled from 'styled-components';


export enum ColorChoice {
  sky = '#79D2E1',
  dullblue = '#B9DCD2',
  tan = '#E0E4CD',
  orange = '#F38631',
  clear = 'transparent'
}

type MenuButtonProps = {
  title: string;
}

const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  position: relative;

  border: 4px solid black;

  margin-bottom: 1rem;
  padding: 0.5rem 1rem;

  color: black;
  background-color: white;

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

const MenuItem: FC<MenuButtonProps> = ({ title }) => {
  return (
    <ListItem>{title}</ListItem>
  );
}

export default MenuItem;
