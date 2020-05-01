import styled from 'styled-components';

import { BoardType, NodeType } from './interfaces';


export const Board = styled.article<BoardType>`
  position: relative;

  width: ${p => p.boardWidth}px;
  height: ${p => p.boardHeight}px;

  margin: 0 auto;
`;


export const Square = styled.div.attrs((props: any) => ({
  style: {
    left: props.xPos + 'px',
    top: props.yPos + 'px',
    width: props.nodeWidth + 'px',
    height: props.nodeHeight + 'px',
    border: `${props.gap}px solid black`,
    backgroundColor: props.active ? 'yellow' : '#444',
  }

}))<NodeType>`
  cursor: pointer;
  position: absolute;
  background: red;

  &:hover {
    background-color: black;
  }
`;
