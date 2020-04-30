import React from 'react';
import styled from 'styled-components';

import config from '../gameConfig';

export type NodeItem = {
  id: number;
  food: boolean;
}

export type BoardType = {
  boardWidth: number;
  boardHeight: number;
}

export type NodeType = {
  gap: number;
  nodeWidth: number;
  nodeHeight: number;
}

const Board = styled.article<BoardType>`
  width: ${p => p.boardWidth}px;
  height: ${p => p.boardHeight}px;

  margin: 0 auto;

  background-color: red;
`;

const Node = styled.div<NodeType>`
  float: left;
  width: ${p => p.nodeWidth}px;
  height: ${p => p.nodeHeight}px;

  background-color: lightgray;
`;


const nodeItems: NodeItem[] = [];

for(let i = 0; i < 1000/50 * 800/50; i++) {
  nodeItems.push({
    id: i,
    food: false,
  })
}

console.log(nodeItems)

const GameBoard = () => {
  return (
    <Board {...config}>
      {nodeItems.map(item => (
        <Node
          key={item.id}
          nodeWidth={config.colSize}
          nodeHeight={config.rowSize}
          gap={config.gap}
        />
      ))}
    </Board>
  )
}

export default GameBoard;
