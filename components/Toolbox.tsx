"use client";

import { useDraggable } from "@dnd-kit/core";
import { ElementType } from "@/types";

const TOOLBOX_ITEMS: { type: ElementType; label: string }[] = [
  { type: "button", label: "Button" },
  { type: "input", label: "Input" },
  { type: "text", label: "Text" },
  { type: "image", label: "Image" },
];

export function Toolbox() {
  return (
    <div className="p-4 border-r w-40 bg-gray-100 flex flex-col gap-4">
      <h2 className="font-bold text-sm">Toolbox</h2>
      {TOOLBOX_ITEMS.map((item) => (
        <ToolboxItem key={item.type} type={item.type} label={item.label} />
      ))}
    </div>
  );
}

function ToolboxItem({ type, label }: { type: ElementType; label: string }) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: `toolbox-${type}`,
    data: { type },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="p-2 border rounded bg-white shadow text-center text-sm cursor-grab active:cursor-grabbing"
    >
      {label}
    </div>
  );
}
