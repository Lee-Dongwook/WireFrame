import { Toolbox } from "@/components/Toolbox";
import { Canvas } from "@/components/Canvas";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Toolbox />
      <Canvas />
    </div>
  );
}
