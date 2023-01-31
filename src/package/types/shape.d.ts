interface ShapeBase {
  fill?: string;
  stroke?: string;
  lineWidth?: number;
  lineDash?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  opacity?: number;
  fillOpacity?: number;
  strokeOpacity?: number;
  cursor?: string;
}
interface RectOptions extends ShapeBase {
  x: number;
  y: number;
  width: number;
  height: number;
  radius?: number | number[];
}

interface TextOptions extends ShapeBase {
  x?: number;
  y?: number;
  text: string;
  textAlign?: center | end | left | right | start;
  textBaseline?: top | middle | bottom | alphabetic | hanging;
  fontStyle?: 'normal' | 'italic' | 'oblique' | string;
  fontWeight?: number;
  fontSize?: number;
  fontFamily?: string;
  lineHeight?: number;
  textIndent?: number; //首行缩进量
}

interface ImageOptions extends ShapeBase {
  x?: number;
  y?: number;
  width: number;
  height: number;
  img: string;
}
