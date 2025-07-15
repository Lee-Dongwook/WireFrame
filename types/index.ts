export type ElementType = "button" | "input" | "text" | "image";

export interface WireframeElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  props?: Record<string, any>;
}
