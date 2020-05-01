import React from 'react';

import { NodeItem } from './interfaces';
import { createNewBoard } from './util';
import config from '../gameConfig';

import { Board, Square } from './styles';


const GameBoard = () => {
  const [boardItems, setBoardItems] = React.useState([] as NodeItem[]);

  React.useEffect(() => {
    setBoardItems(createNewBoard());
  }, []);

  return (
    <Board {...config}>
      {boardItems.map(item => (
        <Square
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
