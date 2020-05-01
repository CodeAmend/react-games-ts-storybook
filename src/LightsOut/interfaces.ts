export type NodeItem = {
  id: number;
  food: boolean;
  xPos: number;
  yPos: number;
  active: boolean;
}

export type BoardType = {
  boardWidth: number;
  boardHeight: number;
}

export type NodeType = {
  gap: number;
  nodeWidth: number;
  nodeHeight: number;
  xPos: number;
  yPos: number;
  active: boolean;
}
