import config, { getSingleBoardDimension } from './gameConfig';


test('Game Config has all needed options', () => {
  expect(typeof config.rows).toBe('number')
  expect(typeof config.cols).toBe('number')

  expect(typeof config.gap).toBe('number')

  expect(typeof config.boardWidth).toBe('number')
  expect(typeof config.boardHeight).toBe('number')
});


test('Single board dimension function', () => {
  const sections = 5;
  const sectionSize = 50;
  const gap = 1;

  const result = getSingleBoardDimension(sections, sectionSize, gap);
  
  // section x sectionSize x gap
  // 5 x 50 x 1 - 1 = 249

  expect(result).toBe(249);
})
