export const getSingleBoardDimension = (sections: number, sectionSize: number, gap: number): number => {
  return sections * sectionSize * gap - gap;
}

export const getPosition = (sectionSize: number, gap: number, position: number) => {
  const result = position * (sectionSize + gap) - gap;
  return result;
}

type ConfigType = { [key: string]: number }
type PixelConfigType = { [key: string]: string }

export const numberToPixels = (config: ConfigType) => 
  Object.keys(config).reduce((acc, item) => {
    acc[item] = config[item] + 'px';
    return acc;
  }, {} as PixelConfigType);


const rows: number = 20;
const cols: number = 20;

const rowSize: number = 10;
const colSize: number = 10;

const gap: number = 1;

const boardHeight = getSingleBoardDimension(rows, rowSize, gap);
const boardWidth = getSingleBoardDimension(cols, colSize, gap)

export default {
  rows,
  cols,
  rowSize: rowSize - gap,
  colSize: colSize - gap,
  gap,
  boardWidth,
  boardHeight,
}
