import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import type { WireframeElement, ElementType } from "@/types";

interface WireframeState {
  elements: WireframeElement[];
  addElement: (type: ElementType, x: number, y: number) => void;
  clearAll: () => void;
}

export const useWireframeStore = create<WireframeState>((set) => ({
  elements: [],
  addElement: (type, x, y) =>
    set((state) => ({
      elements: [
        ...state.elements,
        {
          id: uuidv4(),
          type,
          x,
          y,
          props: {},
        },
      ],
    })),
  clearAll: () => set({ elements: [] }),
}));
