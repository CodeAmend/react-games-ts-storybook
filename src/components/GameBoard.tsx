import React from 'react';
import styled from 'styled-components';

import config, { getPosition, numberToPixels } from '../gameConfig';

export type NodeItem = {
  id: number;
  food: boolean;
  xPos: number;
  yPos: number;
}

export type BoardType = {
  boardWidth: number;
  boardHeight: number;
}

export type NodeType = {
  gap: number;
  nodeWidth: number;
  nodeHeight: number;
  xPos: number;
  yPos: number;
}

const Board = styled.article<BoardType>`
  position: relative;

  width: ${p => p.boardWidth}px;
  height: ${p => p.boardHeight}px;

  margin: 0 auto;
`;

// Example:
//   const Component = styled.div.attrs(props => ({
//     style: {
//       background: props.background,
//     },
//   }))`width: 100%;`

const Node = styled.div<NodeType>`
  position: absolute;
  left: ${p => p.xPos}px;
  top: ${p => p.yPos}px;

  width: ${p => p.nodeWidth}px;
  height: ${p => p.nodeHeight}px;

  border: ${p => p.gap}px solid lightgray;
`;


const nodeItems: NodeItem[] = [];

let count = 0;
for (let x = 0; x < config.cols; x++) {
  for (let y = 0; y < config.rows; y++) {
    nodeItems.push({
      id: count,
      food: false,
      xPos: getPosition(config.colSize, config.gap, x),
      yPos: getPosition(config.rowSize, config.gap, y),
    });

    count++;
  }
}

const GameBoard = () => {
  return (
    <Board {...config}>
      {nodeItems.map(item => (
        <Node
          key={item.id}
          {...numberToPixels(item)}
        />
      ))}
    </Board>
  )
}

export default GameBoard;
