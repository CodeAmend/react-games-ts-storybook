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

  const handleToggle = (item: NodeItem) => {
    const newMap = boardItems
      .map((boardItem: NodeItem) => {
        if (item.id === boardItem.id) {
          boardItem.active = !boardItem.active;
        }
        return boardItem;
      });

    setBoardItems(newMap);
  }

  return (
    <Board {...config}>
      {boardItems.map(item => (
        <Square
          onClick={() => handleToggle(item)}
          key={item.id}
          xPos={item.xPos}
          yPos={item.yPos}
          nodeWidth={config.colSize}
          nodeHeight={config.rowSize}
          gap={config.gap}
          active={item.active}
        />
      ))}
    </Board>
  )
}

export default GameBoard;
