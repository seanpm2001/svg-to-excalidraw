export type RawElement = {
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  points: number[][];
};

export type ElementBoundaries = {
  x: number;
  y: number;
  height: number;
  width: number;
};

export type ExcalidrawElement = RawElement & {
  angle: number;
  fillStyle: string;
  opacity: number;
  roughness: number;
  seed: number;
  strokeColor: string;
  strokeSharpness: string;
  strokeWidth: number;
  backgroundColor: string;
};

export type ExcalidrawScene = {
  type: "excalidraw";
  version: 2;
  source: "https://excalidraw.com";
  elements: ExcalidrawElement[];
};
