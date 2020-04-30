import config, {
  getSingleBoardDimension,
  getPosition,
  numberToPixels,
} from './gameConfig';


test('Game Config has all needed options', () => {
  expect(typeof config.rows).toBe('number')
  expect(typeof config.cols).toBe('number')

  expect(typeof config.gap).toBe('number')

  expect(typeof config.boardWidth).toBe('number')
  expect(typeof config.boardHeight).toBe('number')
});


test('single board dimension function', () => {
  const sections = 5;
  const sectionSize = 50;
  const gap = 1;

  const result = getSingleBoardDimension(sections, sectionSize, gap);
  
  // section x sectionSize x gap
  // 5 x 50 x 1 - 1 = 249

  expect(result).toBe(249);
});

test('number to pixel function', () => {
  const testResult = numberToPixels({
    col: 5,
    row: 4,
    sectionSize: 50,
  })

  expect(testResult).toStrictEqual({
    col: '5px',
    row: '4px',
    sectionSize: '50px',
  })
});

test('get x position', () => {
  const { colSize, gap } = config;
  let testXPos = 2;

  const result = testXPos * colSize + gap;
  const xPos = getPosition(colSize, gap, testXPos);
  expect(xPos).toBe(result);
});

