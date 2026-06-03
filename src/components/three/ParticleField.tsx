"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";

export function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Create particles
  const particlesCount = 400;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
    }
    return pos;
  }, [particlesCount]);

  const colors = useMemo(() => {
    const col = new Float32Array(particlesCount * 3);
    const colorPalette = [
      new THREE.Color("#3B82F6"), // Primary
      new THREE.Color("#8B5CF6"), // Secondary
      new THREE.Color("#06B6D4"), // Accent
    ];
    for (let i = 0; i < particlesCount; i++) {
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return col;
  }, [particlesCount]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
            count={particlesCount}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Floating Geometric Objects */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2} position={[-4, 2, -2]}>
        <mesh>
          <icosahedronGeometry args={[1, 0]} />
          <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.3} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={[4, -1, -3]}>
        <mesh>
          <torusGeometry args={[0.8, 0.2, 16, 32]} />
          <meshBasicMaterial color="#8B5CF6" wireframe transparent opacity={0.3} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={2.5} position={[0, -3, -4]}>
        <mesh>
          <octahedronGeometry args={[1, 0]} />
          <meshBasicMaterial color="#06B6D4" wireframe transparent opacity={0.3} />
        </mesh>
      </Float>
    </>
  );
}
