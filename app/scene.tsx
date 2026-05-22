"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

type DistortMat = THREE.Material & { distort: number; speed: number };

function Blob({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const { size } = useThree();
  const w = size.width;
  // Smooth scale curve across breakpoints
  // < 380px: 0.20  | 380-640: 0.20→0.34  | 640-1024: 0.34→0.75  | > 1024: 1
  const baseScale =
    w < 380 ? 0.58 :
    w < 640 ? 0.58 + ((w - 380) / 260) * 0.07 :
    w < 1024 ? 0.65 + ((w - 640) / 384) * 0.20 :
    w < 1280 ? 0.85 + ((w - 1024) / 256) * 0.15 :
    1;
  const isMobile = w < 768;
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireRef = useRef<THREE.Mesh>(null!);
  const matRef  = useRef<DistortMat>(null!);
  const pointer = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const m = meshRef.current;
    const w = wireRef.current;
    if (!m) return;

    // pointer follow (smoothed)
    const p = state.pointer;
    pointer.current.x += (p.x - pointer.current.x) * 0.06;
    pointer.current.y += (p.y - pointer.current.y) * 0.06;

    const rx = pointer.current.y * 0.35 + Math.sin(t * 0.25) * 0.12;
    const ry = pointer.current.x * 0.6 + t * 0.18;
    m.rotation.x = rx;
    m.rotation.y = ry;
    if (w) {
      w.rotation.x = rx;
      w.rotation.y = ry;
    }

    // scroll-driven: gentle recede + dim, blob stays centered and visible
    const s = scrollRef.current;
    const targetScale = baseScale * (1 - s * 0.18);
    m.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
    if (w) {
      const ws = targetScale * 1.04;
      w.scale.lerp(new THREE.Vector3(ws, ws, ws), 0.05);
    }

    if (matRef.current) {
      matRef.current.distort = 0.32 + Math.sin(t * 0.6) * 0.06 + s * 0.25;
      matRef.current.speed = (isMobile ? 0.9 : 1.4) + s * 0.8;
      (matRef.current as unknown as { emissiveIntensity: number }).emissiveIntensity =
        (isMobile ? 0.32 : 0.45) - s * 0.2;
    }
  });

  return (
    <Float floatIntensity={0.7} rotationIntensity={0.2} speed={1.1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.55, 64]} />
        <MeshDistortMaterial
          ref={matRef as unknown as React.Ref<never>}
          color="#14171d"
          emissive="#6d4cff"
          emissiveIntensity={0.45}
          roughness={0.2}
          metalness={0.9}
          distort={0.35}
          speed={1.2}
        />
      </mesh>
      <mesh ref={wireRef} scale={1.04}>
        <icosahedronGeometry args={[1.55, 4]} />
        <meshBasicMaterial color="#d4ff3a" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
}

function Rig({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const { size } = useThree();
  const w = size.width;
  // Camera distance grows on smaller screens so the blob takes up less viewport
  const baseZ =
    w < 380 ? 5.2 :
    w < 640 ? 5.2 - ((w - 380) / 260) * 0.4 :
    w < 1024 ? 4.8 - ((w - 640) / 384) * 0.4 :
    4.2;
  const sway = w < 768 ? 0.25 : 0.5;
  useFrame((state) => {
    const p = state.pointer;
    const s = scrollRef.current;
    const targetZ = baseZ + s * 1.2;
    state.camera.position.x += (p.x * sway - state.camera.position.x) * 0.04;
    state.camera.position.y += (-p.y * sway * 0.7 - state.camera.position.y) * 0.04;
    state.camera.position.z += (targetZ - state.camera.position.z) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene({
  scrollRef,
}: {
  scrollRef: React.MutableRefObject<number>;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#08090c"]} />

      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 3]} intensity={1.4} color="#ff4d2e" />
      <directionalLight position={[-3, -2, -2]} intensity={1.0} color="#6d4cff" />
      <pointLight position={[0, 0, 2.5]} intensity={0.6} color="#d4ff3a" />

      <Blob scrollRef={scrollRef} />
      <Rig scrollRef={scrollRef} />
    </Canvas>
  );
}
