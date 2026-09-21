'use client';

import React from 'react'
import {Suspense, useRef} from "react";
import { useScroll, type MotionValue } from "motion/react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Environment, useGLTF } from "@react-three/drei";

function Turbine({ progress }: { progress: MotionValue<number> }) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/savonius-opt.glb");

  useFrame((_, delta) => {
    if (!group.current) return;
    const target = progress.get() * Math.PI * 4;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, target, 1, delta);
  });

  return (
    
      <group ref={group}>
        <group 
          rotation={[Math.PI/2, 0, 0]}
          scale={5}
          position={[0.44, -0.25, 0.32]}
        >
          <primitive object={scene} />
        </group> 
      </group>
  );
}

useGLTF.preload("/models/savonius-opt.glb");

export default function SavoniusCard() {
  const ref = useRef<HTMLDivElement>(null);

  // Progress of THIS card. Tune `offset` for my layout:
  // ["start end", "end start"] = 0 when the card's top hits the viewport bottom,
  // 1 when its bottom leaves the viewport top.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <div ref={ref} className="h-full w-full">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 1, 5], fov: 35 }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 5, 2]} intensity={1.5} />
        <Suspense fallback={null}>
          <Turbine progress={scrollYProgress} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}