export const getSingleBoardDimension = (sections: number, sectionSize: number, gap: number): number => {
  return sections * sectionSize * gap - gap;
}

const rows: number = 20;
const cols: number = 20;

const rowSize: number = 50;
const colSize: number = 50;

const gap: number = 1;

const boardWidth = getSingleBoardDimension(rows, rowSize, gap);
const boardHeight = getSingleBoardDimension(cols, colSize, gap)

export default {
  rows,
  cols,
  rowSize: rowSize - gap,
  colSize: colSize - gap,
  gap,
  boardWidth,
  boardHeight,
}
