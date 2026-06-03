"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ParticleField } from "./ParticleField";
import { StarsBackground } from "./StarsBackground";

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <StarsBackground />
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}
