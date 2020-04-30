export const getSingleBoardDimension =
  (sections: number, sectionSize: number, gap: number): number => {
    return sections * (sectionSize + gap) - gap;
  }

export const getPosition =
  (sectionSize: number, gap: number, position: number) => {
    const result = position * (sectionSize + gap) - gap;
    return result;
  }

const rows: number = 10;
const cols: number = 10;

const gap: number = 1;

const rowSize: number = 50;
const colSize: number = 50;


const boardHeight = getSingleBoardDimension(rows, rowSize, gap);
const boardWidth = getSingleBoardDimension(cols, colSize, gap)

export default {
  rows,
  cols,
  rowSize,
  colSize,
  gap,
  boardWidth,
  boardHeight,
}
