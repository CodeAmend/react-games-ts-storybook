import config from './config';
import { GridSquareProps } from '../LightsOut/interfaces';


export const createNewBoard = (): GridSquareProps[] => {
  const nodeItems: GridSquareProps[] = [];

  let count = 0;
  for (let x = 0; x < config.cols; x++) {
    for (let y = 0; y < config.rows; y++) {
      nodeItems.push({
        index: count,
        active: false,
        gap: config.gap + 'px',
        width: config.colSize + 'px',
        height: config.rowSize + 'px',
      });

      count++;
    }
  }
  return nodeItems;
}
