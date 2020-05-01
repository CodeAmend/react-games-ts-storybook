import styled from 'styled-components';

import { GridBoardOptionProps } from './interfaces';


export const Board = styled.article<GridBoardOptionProps>`
  width: ${p => p.width};
  height: ${p => p.height};
  background-color: lightgray;

  display: grid;
  grid-template-columns: repeat(${p => p.cols}, 1fr);
`;


// TODO: Why does 'onClick' not show up for styled-component
// How to implement this? Idea below...
// interface SquareType extends React.HTMLAttributes<HTMLElement> {}

export const Square = styled.div<any>`
  cursor: pointer;

  width: ${p => p.width};
  height: ${p => p.height};

  border: ${p => p.gap} solid black;
  background-color: ${p => p.active ? 'yellow' : '#444'};

  &:hover {
    background-color: ${p => p.active ? '#f9d71c' : '#222'};
  }
`;
