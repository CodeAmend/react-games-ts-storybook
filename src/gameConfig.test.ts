import config, { getSingleBoardDimension } from './gameConfig';


test('Game Config has all needed options', () => {
  expect(typeof config.rows).toBe('number')
  expect(typeof config.cols).toBe('number')

  expect(typeof config.gap).toBe('number')

  expect(typeof config.boardWidth).toBe('number')
  expect(typeof config.boardHeight).toBe('number')
});


test('single board dimension function', () => {
  let sections = 5;
  let sectionSize = 50;
  let gap = 1;

  const result1 = getSingleBoardDimension(sections, sectionSize, gap);
  expect(result1).toBe(255);

  sections = 20;
  sectionSize = 15;
  gap = 3;
  const result2 = getSingleBoardDimension(sections, sectionSize, gap);
  expect(result2).toBe(360);
});
