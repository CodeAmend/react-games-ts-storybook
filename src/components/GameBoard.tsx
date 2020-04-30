import React from 'react';
import styled from 'styled-components';

import config, { getPosition } from '../gameConfig';

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
  background: red;
`;


// TODO: Find the proper way to not use ANY here
const Node = styled.div.attrs((props: any) => ({
  style: {
    left: props.xPos + 'px',
    top: props.yPos + 'px',
    width: props.nodeWidth + 'px',
    height: props.nodeHeight + 'px',
    border: `${props.gap}px solid black`
  }

}))<NodeType>`
  position: absolute;
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
          xPos={item.xPos}
          yPos={item.yPos}
          nodeWidth={config.colSize}
          nodeHeight={config.rowSize}
          gap={config.gap}
        />
      ))}
    </Board>
  )
}

export default GameBoard;
