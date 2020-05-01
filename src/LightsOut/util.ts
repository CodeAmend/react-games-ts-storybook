import { NodeItem } from './interfaces';
import config, { getPosition } from '../gameConfig';


export const createNewBoard = (): NodeItem[] => {
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
  return nodeItems;
}


