import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

/* ─── Floating Geometric Shape ─── */
const FloatingShape = ({ position, rotationSeed, geometry, color, wireframe, speed, scale }) => {
  const meshRef = useRef();
  const initRot = useMemo(() => rotationSeed, [rotationSeed]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = initRot[0] + t * speed * 0.35;
    meshRef.current.rotation.y = initRot[1] + t * speed * 0.55;
    meshRef.current.rotation.z = initRot[2] + t * speed * 0.22;
    meshRef.current.position.y = position[1] + Math.sin(t * speed * 0.8 + position[0]) * 0.5;
    meshRef.current.position.x = position[0] + Math.cos(t * speed * 0.4 + position[2]) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={[...position]} scale={scale}>
      {geometry}
      <meshPhysicalMaterial
        color={color}
        wireframe={wireframe}
        transparent
        opacity={wireframe ? 0.45 : 0.18}
        emissive={color}
        emissiveIntensity={wireframe ? 0.9 : 0.5}
        roughness={0.2}
        metalness={wireframe ? 0 : 0.7}
        reflectivity={0.5}
      />
    </mesh>
  );
};

/* ─── Constellation Lines ─── */
const ConstellationLines = () => {
  const ref = useRef();
  const { positions, indices } = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 60; i++) {
      pts.push(
        (Math.random() - 0.5) * 38,
        (Math.random() - 0.5) * 28,
        (Math.random() - 0.5) * 18
      );
    }
    const pos = new Float32Array(pts);
    const idx = [];
    for (let i = 0; i < 60; i++) {
      for (let j = i + 1; j < 60; j++) {
        const dx = pts[i*3]-pts[j*3], dy = pts[i*3+1]-pts[j*3+1], dz = pts[i*3+2]-pts[j*3+2];
        if (Math.sqrt(dx*dx+dy*dy+dz*dz) < 7) { idx.push(i, j); }
      }
    }
    return { positions: pos, indices: new Uint16Array(idx) };
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.008;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.005) * 0.06;
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={positions.length / 3} itemSize={3} />
        <bufferAttribute attach="index" array={indices} count={indices.length} itemSize={1} />
      </bufferGeometry>
      <lineBasicMaterial color="#a855f7" transparent opacity={0.12} />
    </lineSegments>
  );
};

/* ─── Layered Particle Fields ─── */
const ParticleField = ({ count, spread, size, speed, layer }) => {
  const meshRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#a855f7"), new THREE.Color("#6366f1"),
      new THREE.Color("#ec4899"), new THREE.Color("#06b6d4"),
      new THREE.Color("#8b5cf6"), new THREE.Color("#f43f5e"),
    ];
    for (let i = 0; i < count; i++) {
      pos[i*3]   = (Math.random()-0.5) * spread[0];
      pos[i*3+1] = (Math.random()-0.5) * spread[1];
      pos[i*3+2] = (Math.random()-0.5) * spread[2];
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i*3] = c.r; col[i*3+1] = c.g; col[i*3+2] = c.b;
    }
    return [pos, col];
  }, [count, spread]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.y = t * speed;
    meshRef.current.rotation.x = Math.sin(t * speed * 0.4 + layer) * 0.12;
    meshRef.current.rotation.z = Math.cos(t * speed * 0.3 + layer) * 0.05;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
        <bufferAttribute attach="attributes-color" array={colors} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={size} vertexColors transparent opacity={0.9} sizeAttenuation />
    </points>
  );
};

/* ─── Orbiting Ring System ─── */
const OrbitalRing = ({ radius, tube, color, tiltX, tiltZ, speed }) => {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * speed;
  });
  return (
    <mesh ref={ref} rotation={[tiltX, 0, tiltZ]} position={[0, 0, -8]}>
      <torusGeometry args={[radius, tube, 2, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.07} />
    </mesh>
  );
};

/* ─── Mouse Camera Rig ─── */
const CameraRig = () => {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame(() => {
    target.current.x += (mouse.current.x * 1.2 - target.current.x) * 0.025;
    target.current.y += (mouse.current.y * 0.8 - target.current.y) * 0.025;
    camera.position.x = target.current.x;
    camera.position.y = target.current.y;
    camera.lookAt(0, 0, 0);
  });
  return null;
};

/* ─── Full Scene ─── */
const Scene = () => {
  const shapes = useMemo(() => [
    { id:0, pos:[-6,3,-5],   geo:<icosahedronGeometry args={[1.5,1]}/>, color:"#a855f7", wire:true,  spd:0.007, sc:1    },
    { id:1, pos:[7,-2,-9],   geo:<octahedronGeometry args={[1.3,0]}/>,  color:"#6366f1", wire:true,  spd:0.009, sc:1    },
    { id:2, pos:[-8,-4,-6],  geo:<torusGeometry args={[1.0,0.35,16,60]}/>,color:"#ec4899",wire:false, spd:0.008, sc:1   },
    { id:3, pos:[5,4,-11],   geo:<tetrahedronGeometry args={[1.2,0]}/>, color:"#06b6d4", wire:true,  spd:0.005, sc:1    },
    { id:4, pos:[0,-5,-13],  geo:<dodecahedronGeometry args={[1.1,0]}/>,color:"#8b5cf6", wire:true,  spd:0.004, sc:1    },
    { id:5, pos:[-4,6.5,-15],geo:<torusKnotGeometry args={[0.8,0.28,100,16]}/>,color:"#f59e0b",wire:false,spd:0.009,sc:0.9},
    { id:6, pos:[9,2,-7],    geo:<icosahedronGeometry args={[0.9,1]}/>, color:"#10b981", wire:true,  spd:0.011, sc:1    },
    { id:7, pos:[-2,-7,-9],  geo:<octahedronGeometry args={[1.0,0]}/>,  color:"#f43f5e", wire:false, spd:0.007, sc:1    },
    { id:8, pos:[3,7,-12],   geo:<icosahedronGeometry args={[0.7,0]}/>, color:"#a78bfa", wire:true,  spd:0.013, sc:1    },
    { id:9, pos:[-10,0,-10], geo:<torusGeometry args={[0.7,0.22,12,50]}/>,color:"#38bdf8",wire:false,spd:0.006, sc:1   },
    { id:10,pos:[11,-4,-12], geo:<tetrahedronGeometry args={[0.9,0]}/>, color:"#fb7185", wire:true,  spd:0.008, sc:1    },
    { id:11,pos:[-5,8,-16],  geo:<dodecahedronGeometry args={[0.8,0]}/>,color:"#4ade80", wire:true,  spd:0.005, sc:1    },
  ], []);

  return (
    <>
      <CameraRig />
      {/* Lights */}
      <ambientLight intensity={0.25} />
      <pointLight position={[12, 12, 8]}   intensity={2.0} color="#a855f7" />
      <pointLight position={[-12,-12,-8]}  intensity={1.5} color="#6366f1" />
      <pointLight position={[0, 14, -6]}   intensity={1.0} color="#ec4899" />
      <pointLight position={[0, -10, 5]}   intensity={0.8} color="#06b6d4" />
      <spotLight position={[0, 20, 0]} angle={0.4} penumbra={1} intensity={1.2} color="#8b5cf6" />

      {/* Particle layers at different depths */}
      <ParticleField count={1400} spread={[42,32,22]} size={0.06}  speed={0.012} layer={0} />
      <ParticleField count={600}  spread={[28,22,10]} size={0.1}   speed={0.007} layer={1} />
      <ParticleField count={300}  spread={[16,12,6]}  size={0.16}  speed={0.019} layer={2} />

      {/* Constellation lines */}
      <ConstellationLines />

      {/* Orbital rings in background */}
      <OrbitalRing radius={14} tube={0.04} color="#a855f7" tiltX={0.4}  tiltZ={0.2}  speed={0.015} />
      <OrbitalRing radius={19} tube={0.03} color="#6366f1" tiltX={-0.3} tiltZ={0.5}  speed={-0.01} />
      <OrbitalRing radius={24} tube={0.025} color="#ec4899" tiltX={0.7} tiltZ={-0.4} speed={0.008} />

      {/* Floating shapes */}
      {shapes.map((s) => (
        <FloatingShape
          key={s.id}
          position={s.pos}
          rotationSeed={[Math.random()*6.28, Math.random()*6.28, Math.random()*6.28]}
          geometry={s.geo}
          color={s.color}
          wireframe={s.wire}
          speed={s.spd}
          scale={s.sc}
        />
      ))}
    </>
  );
};

const ThreeBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    <Canvas
      camera={{ position: [0, 0, 14], fov: 65 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  </div>
);

export default ThreeBackground;
