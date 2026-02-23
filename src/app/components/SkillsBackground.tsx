// @ts-nocheck
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingParticles({ count = 80 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      sz[i] = Math.random() * 2 + 0.5;
    }
    return [pos, sz];
  }, [count]);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.02;
    mesh.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#22d3ee"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingGeometry() {
  const group = useRef<THREE.Group>(null);
  const meshRefs = useRef<THREE.Mesh[]>([]);

  const geometries = useMemo(() => {
    return [
      { pos: [-4, 3, -3] as [number, number, number], scale: 0.4, speed: 0.3, rotSpeed: 0.5, type: "icosahedron" },
      { pos: [5, -2, -4] as [number, number, number], scale: 0.3, speed: 0.4, rotSpeed: 0.7, type: "octahedron" },
      { pos: [-3, -4, -2] as [number, number, number], scale: 0.35, speed: 0.25, rotSpeed: 0.6, type: "dodecahedron" },
      { pos: [4, 4, -5] as [number, number, number], scale: 0.25, speed: 0.35, rotSpeed: 0.4, type: "tetrahedron" },
      { pos: [-5, 0, -6] as [number, number, number], scale: 0.3, speed: 0.2, rotSpeed: 0.8, type: "icosahedron" },
      { pos: [2, -5, -3] as [number, number, number], scale: 0.2, speed: 0.45, rotSpeed: 0.3, type: "octahedron" },
    ];
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const geo = geometries[i];
      mesh.position.y = geo.pos[1] + Math.sin(t * geo.speed + i) * 0.5;
      mesh.position.x = geo.pos[0] + Math.cos(t * geo.speed * 0.7 + i) * 0.3;
      mesh.rotation.x += 0.002 * geo.rotSpeed;
      mesh.rotation.y += 0.003 * geo.rotSpeed;
    });
  });

  return (
    <group ref={group}>
      {geometries.map((geo, i) => (
        <mesh
          key={i}
          ref={(el) => { if (el) meshRefs.current[i] = el; }}
          position={geo.pos}
          scale={geo.scale}
        >
          {geo.type === "icosahedron" && <icosahedronGeometry args={[1, 0]} />}
          {geo.type === "octahedron" && <octahedronGeometry args={[1, 0]} />}
          {geo.type === "dodecahedron" && <dodecahedronGeometry args={[1, 0]} />}
          {geo.type === "tetrahedron" && <tetrahedronGeometry args={[1, 0]} />}
          <meshBasicMaterial
            color="#22d3ee"
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>
      ))}
    </group>
  );
}

export function SkillsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <FloatingParticles />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
