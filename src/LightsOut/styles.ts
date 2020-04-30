import styled from 'styled-components';

import { BoardType, NodeType } from './interfaces';


export const Board = styled.article<BoardType>`
  position: relative;

  width: ${p => p.boardWidth}px;
  height: ${p => p.boardHeight}px;

  margin: 0 auto;
  background-color: orange;
`;


// TODO: Find the proper way to not use ANY here
export const Node = styled.div.attrs((props: any) => ({
  style: {
    left: props.xPos + 'px',
    top: props.yPos + 'px',
    width: props.nodeWidth + 'px',
    height: props.nodeHeight + 'px',
    border: `${props.gap}px solid lightgray`
  }

}))<NodeType>`
  position: absolute;

  &:hover {
    background-color: black;
  }
`;


