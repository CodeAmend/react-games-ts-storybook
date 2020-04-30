import React from 'react';
import styled from 'styled-components';

import { NodeItem, BoardType, NodeType } from './interfaces';

import config from '../gameConfig';
import { createNewBoard } from './util';


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



const GameBoard = () => {
  const [boardItems, setBoardItems] = React.useState([] as NodeItem[]);

  React.useEffect(() => {
    setBoardItems(createNewBoard());
  }, []);

  return (
    <Board {...config}>
      {boardItems.map(item => (
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
