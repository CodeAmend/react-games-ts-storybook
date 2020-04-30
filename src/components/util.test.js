import { createNewBoard } from './util';
import config from '../gameConfig';


test('New board is correct length', () => {
  const board = createNewBoard()
  expect(board.length).toBe(config.rows * config.cols);
});
