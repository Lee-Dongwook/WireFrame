"use client";

import { DndContext } from "@dnd-kit/core";
import { useWireframeStore } from "@/store/wireframeStore";
import { useCallback } from "react";

export function Canvas() {
  const { addElement, elements } = useWireframeStore();

  const handleDrop = useCallback(
    (event: any) => {
      const { delta } = event;
      const { type } = event.active.data.current || {};

      if (!type) return;

      const rect = event.over?.rect;
      const dropX = event.activatorEvent.clientX - 200;
      const dropY = event.activatorEvent.clientY;

      addElement(type, dropX, dropY);
    },
    [addElement]
  );

  return (
    <DndContext onDragEnd={handleDrop}>
      <div className="flex-1 relative bg-white overflow-hidden">
        {elements.map((el) => (
          <div
            key={el.id}
            className="absolute border border-gray-400 rounded p-2 text-xs bg-blue-100"
            style={{
              left: el.x,
              top: el.y,
            }}
          >
            {el.type}
          </div>
        ))}
      </div>
    </DndContext>
  );
}
