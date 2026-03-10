import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";

const SKIN = "#fbbf24";
const DARK_SKIN = "#f59e0b";
const SHIRT = "#7c3aed";
const PANTS = "#1e1b4b";
const HAIR = "#1c1917";
const CHAIR_COL = "#312e81";

const CodingPerson = () => {
  const groupRef = useRef();
  const leftHandRef = useRef();
  const rightHandRef = useRef();
  const headRef = useRef();
  const screenMeshRef = useRef();
  const cursorRef = useRef();
  const particlesRef = useRef();

  const particleData = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        x: (Math.random() - 0.5) * 3.5,
        y: Math.random() * 3 - 1,
        z: (Math.random() - 0.5) * 1.5,
        w: 0.06 + Math.random() * 0.1,
        color: i % 3 === 0 ? "#a855f7" : i % 3 === 1 ? "#22d3ee" : "#4ade80",
      })),
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = -0.28 + Math.sin(t * 0.18) * 0.03;
    }

    if (leftHandRef.current) {
      leftHandRef.current.position.y =
        0.29 + Math.abs(Math.sin(t * 7.5)) * 0.045;
    }
    if (rightHandRef.current) {
      rightHandRef.current.position.y =
        0.29 + Math.abs(Math.sin(t * 7.5 + 2.2)) * 0.045;
    }

    if (headRef.current) {
      headRef.current.rotation.x = -0.08 + Math.sin(t * 0.35) * 0.055;
      headRef.current.rotation.y = Math.sin(t * 0.2) * 0.06;
    }

    if (screenMeshRef.current) {
      screenMeshRef.current.material.emissiveIntensity =
        0.45 + Math.sin(t * 2.5) * 0.15;
    }

    if (cursorRef.current) {
      cursorRef.current.visible = Math.floor(t * 1.8) % 2 === 0;
    }

    if (particlesRef.current) {
      particlesRef.current.children.forEach((p, i) => {
        p.position.y += 0.0025;
        p.position.x += Math.sin(t * 0.6 + i) * 0.0008;
        if (p.position.y > 2.2) p.position.y = -0.8;
        p.material.opacity = 0.25 + Math.sin(t * 1.8 + i * 0.7) * 0.25;
      });
    }
  });

  return (
    <group ref={groupRef} rotation={[0, -0.28, 0]}>
      {/* ── Lights ── */}
      <ambientLight intensity={0.35} />
      <pointLight position={[3, 4, 3]} intensity={2.8} color="#a855f7" />
      <pointLight position={[-3, 2, 2]} intensity={1.6} color="#6366f1" />
      <pointLight position={[0, -1, 4]} intensity={0.9} color="#ec4899" />
      {/* Screen glow light */}
      <pointLight position={[0, 0.65, -0.7]} intensity={1.8} color="#06b6d4" distance={3} />

      {/* ── Floating code particles ── */}
      <group ref={particlesRef}>
        {particleData.map((p, i) => (
          <mesh key={i} position={[p.x, p.y, p.z]}>
            <boxGeometry args={[p.w, 0.015, 0.015]} />
            <meshBasicMaterial color={p.color} transparent opacity={0.45} />
          </mesh>
        ))}
      </group>

      {/* ════════════════════════════════
          CHAIR
      ════════════════════════════════ */}
      {/* Seat */}
      <mesh position={[0, -0.05, 0.2]}>
        <boxGeometry args={[0.78, 0.07, 0.72]} />
        <meshStandardMaterial color={CHAIR_COL} roughness={0.7} metalness={0.2} />
      </mesh>
      {/* Back rest */}
      <mesh position={[0, 0.38, 0.56]}>
        <boxGeometry args={[0.76, 0.7, 0.07]} />
        <meshStandardMaterial color={CHAIR_COL} roughness={0.7} metalness={0.2} />
      </mesh>
      {/* Chair legs */}
      {[[-0.3, -0.3], [0.3, -0.3], [-0.3, 0.53], [0.3, 0.53]].map(([x, z], i) => (
        <mesh key={i} position={[x, -0.54, z]}>
          <cylinderGeometry args={[0.022, 0.022, 0.98, 6]} />
          <meshStandardMaterial color="#4c1d95" metalness={0.5} roughness={0.4} />
        </mesh>
      ))}
      {/* Arm rests */}
      <mesh position={[-0.43, 0.14, 0.2]}>
        <boxGeometry args={[0.05, 0.04, 0.52]} />
        <meshStandardMaterial color="#4c1d95" />
      </mesh>
      <mesh position={[0.43, 0.14, 0.2]}>
        <boxGeometry args={[0.05, 0.04, 0.52]} />
        <meshStandardMaterial color="#4c1d95" />
      </mesh>

      {/* ════════════════════════════════
          BODY
      ════════════════════════════════ */}
      {/* Hips */}
      <mesh position={[0, 0.11, 0.18]}>
        <boxGeometry args={[0.5, 0.23, 0.27]} />
        <meshStandardMaterial color={PANTS} roughness={0.8} />
      </mesh>
      {/* Torso */}
      <mesh position={[0, 0.52, 0.18]}>
        <boxGeometry args={[0.54, 0.66, 0.3]} />
        <meshStandardMaterial
          color={SHIRT}
          roughness={0.6}
          metalness={0.1}
          emissive={SHIRT}
          emissiveIntensity={0.1}
        />
      </mesh>
      {/* Shirt logo/detail */}
      <mesh position={[0, 0.62, 0.34]}>
        <boxGeometry args={[0.18, 0.22, 0.01]} />
        <meshStandardMaterial color="#5b21b6" emissive="#8b5cf6" emissiveIntensity={0.5} />
      </mesh>

      {/* ════════════════════════════════
          NECK
      ════════════════════════════════ */}
      <mesh position={[0, 0.9, 0.18]}>
        <cylinderGeometry args={[0.09, 0.11, 0.13, 8]} />
        <meshStandardMaterial color={SKIN} roughness={0.7} />
      </mesh>

      {/* ════════════════════════════════
          HEAD
      ════════════════════════════════ */}
      <group ref={headRef} position={[0, 1.14, 0.15]}>
        {/* Head */}
        <mesh>
          <boxGeometry args={[0.41, 0.44, 0.39]} />
          <meshStandardMaterial color={SKIN} roughness={0.7} />
        </mesh>
        {/* Hair top */}
        <mesh position={[0, 0.24, 0]}>
          <boxGeometry args={[0.43, 0.1, 0.41]} />
          <meshStandardMaterial color={HAIR} roughness={0.8} />
        </mesh>
        {/* Hair front */}
        <mesh position={[0, 0.18, -0.205]}>
          <boxGeometry args={[0.41, 0.14, 0.045]} />
          <meshStandardMaterial color={HAIR} roughness={0.8} />
        </mesh>
        {/* Left eye white */}
        <mesh position={[-0.11, 0.06, -0.2]}>
          <boxGeometry args={[0.09, 0.07, 0.01]} />
          <meshStandardMaterial color="white" />
        </mesh>
        {/* Right eye white */}
        <mesh position={[0.11, 0.06, -0.2]}>
          <boxGeometry args={[0.09, 0.07, 0.01]} />
          <meshStandardMaterial color="white" />
        </mesh>
        {/* Left pupil */}
        <mesh position={[-0.11, 0.06, -0.207]}>
          <boxGeometry args={[0.044, 0.044, 0.01]} />
          <meshStandardMaterial color="#1c1917" />
        </mesh>
        {/* Right pupil */}
        <mesh position={[0.11, 0.06, -0.207]}>
          <boxGeometry args={[0.044, 0.044, 0.01]} />
          <meshStandardMaterial color="#1c1917" />
        </mesh>
        {/* Glasses left */}
        <mesh position={[-0.11, 0.06, -0.215]}>
          <torusGeometry args={[0.058, 0.011, 6, 12]} />
          <meshStandardMaterial
            color="#6366f1"
            metalness={0.9}
            roughness={0.1}
            emissive="#818cf8"
            emissiveIntensity={0.5}
          />
        </mesh>
        {/* Glasses right */}
        <mesh position={[0.11, 0.06, -0.215]}>
          <torusGeometry args={[0.058, 0.011, 6, 12]} />
          <meshStandardMaterial
            color="#6366f1"
            metalness={0.9}
            roughness={0.1}
            emissive="#818cf8"
            emissiveIntensity={0.5}
          />
        </mesh>
        {/* Glasses bridge */}
        <mesh position={[0, 0.06, -0.215]}>
          <boxGeometry args={[0.1, 0.011, 0.01]} />
          <meshStandardMaterial color="#6366f1" metalness={0.9} emissive="#818cf8" emissiveIntensity={0.5} />
        </mesh>
        {/* Smile */}
        <mesh position={[0, -0.1, -0.206]}>
          <boxGeometry args={[0.1, 0.013, 0.01]} />
          <meshStandardMaterial color={DARK_SKIN} />
        </mesh>
        {/* Ear left */}
        <mesh position={[-0.215, 0.04, 0]}>
          <boxGeometry args={[0.03, 0.1, 0.09]} />
          <meshStandardMaterial color={SKIN} roughness={0.7} />
        </mesh>
        {/* Ear right */}
        <mesh position={[0.215, 0.04, 0]}>
          <boxGeometry args={[0.03, 0.1, 0.09]} />
          <meshStandardMaterial color={SKIN} roughness={0.7} />
        </mesh>
      </group>

      {/* ════════════════════════════════
          ARMS
      ════════════════════════════════ */}
      {/* Left upper arm */}
      <mesh position={[-0.36, 0.57, 0.18]} rotation={[0.55, 0, 0.15]}>
        <capsuleGeometry args={[0.072, 0.28, 4, 8]} />
        <meshStandardMaterial color={SKIN} roughness={0.6} />
      </mesh>
      {/* Right upper arm */}
      <mesh position={[0.36, 0.57, 0.18]} rotation={[0.55, 0, -0.15]}>
        <capsuleGeometry args={[0.072, 0.28, 4, 8]} />
        <meshStandardMaterial color={SKIN} roughness={0.6} />
      </mesh>
      {/* Left forearm */}
      <mesh position={[-0.4, 0.38, -0.1]} rotation={[1.05, 0, 0.18]}>
        <capsuleGeometry args={[0.062, 0.26, 4, 8]} />
        <meshStandardMaterial color={SKIN} roughness={0.6} />
      </mesh>
      {/* Right forearm */}
      <mesh position={[0.4, 0.38, -0.1]} rotation={[1.05, 0, -0.18]}>
        <capsuleGeometry args={[0.062, 0.26, 4, 8]} />
        <meshStandardMaterial color={SKIN} roughness={0.6} />
      </mesh>

      {/* ════════════════════════════════
          HANDS (typing on keyboard)
      ════════════════════════════════ */}
      <mesh ref={leftHandRef} position={[-0.3, 0.29, -0.48]}>
        <boxGeometry args={[0.14, 0.065, 0.12]} />
        <meshStandardMaterial color={SKIN} roughness={0.7} />
      </mesh>
      <mesh ref={rightHandRef} position={[0.3, 0.29, -0.48]}>
        <boxGeometry args={[0.14, 0.065, 0.12]} />
        <meshStandardMaterial color={SKIN} roughness={0.7} />
      </mesh>

      {/* ════════════════════════════════
          LEGS (sitting position)
      ════════════════════════════════ */}
      {/* Left thigh (horizontal) */}
      <mesh position={[-0.2, -0.04, -0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <capsuleGeometry args={[0.1, 0.33, 4, 8]} />
        <meshStandardMaterial color={PANTS} roughness={0.8} />
      </mesh>
      {/* Right thigh */}
      <mesh position={[0.2, -0.04, -0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <capsuleGeometry args={[0.1, 0.33, 4, 8]} />
        <meshStandardMaterial color={PANTS} roughness={0.8} />
      </mesh>
      {/* Left shin (vertical) */}
      <mesh position={[-0.2, -0.5, -0.3]}>
        <capsuleGeometry args={[0.082, 0.38, 4, 8]} />
        <meshStandardMaterial color={PANTS} roughness={0.8} />
      </mesh>
      {/* Right shin */}
      <mesh position={[0.2, -0.5, -0.3]}>
        <capsuleGeometry args={[0.082, 0.38, 4, 8]} />
        <meshStandardMaterial color={PANTS} roughness={0.8} />
      </mesh>
      {/* Left shoe */}
      <mesh position={[-0.2, -0.8, -0.2]}>
        <boxGeometry args={[0.13, 0.1, 0.26]} />
        <meshStandardMaterial color="#111827" roughness={0.8} />
      </mesh>
      {/* Right shoe */}
      <mesh position={[0.2, -0.8, -0.2]}>
        <boxGeometry args={[0.13, 0.1, 0.26]} />
        <meshStandardMaterial color="#111827" roughness={0.8} />
      </mesh>

      {/* ════════════════════════════════
          DESK
      ════════════════════════════════ */}
      {/* Desk top */}
      <mesh position={[0, 0.22, -0.82]}>
        <boxGeometry args={[1.85, 0.055, 0.92]} />
        <meshStandardMaterial color="#1e293b" roughness={0.5} metalness={0.45} />
      </mesh>
      {/* Desk legs */}
      <mesh position={[-0.84, -0.36, -0.82]}>
        <boxGeometry args={[0.065, 1.16, 0.065]} />
        <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0.84, -0.36, -0.82]}>
        <boxGeometry args={[0.065, 1.16, 0.065]} />
        <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.36, -1.26]}>
        <boxGeometry args={[1.72, 0.065, 0.065]} />
        <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.36, -0.38]}>
        <boxGeometry args={[1.72, 0.065, 0.065]} />
        <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.4} />
      </mesh>

      {/* ════════════════════════════════
          LAPTOP
      ════════════════════════════════ */}
      {/* Base / keyboard */}
      <mesh position={[0, 0.265, -0.85]}>
        <boxGeometry args={[0.88, 0.042, 0.62]} />
        <meshStandardMaterial color="#1f2937" roughness={0.4} metalness={0.7} />
      </mesh>
      {/* Keyboard surface */}
      <mesh position={[0, 0.29, -0.86]}>
        <boxGeometry args={[0.74, 0.01, 0.48]} />
        <meshStandardMaterial color="#111827" roughness={0.7} />
      </mesh>
      {/* Key rows (decorative) */}
      {[-0.12, -0.03, 0.06].map((rowZ, ri) => (
        <mesh key={ri} position={[0, 0.297, rowZ - 0.85]}>
          <boxGeometry args={[0.64, 0.008, 0.055]} />
          <meshStandardMaterial color="#1f2937" roughness={0.6} />
        </mesh>
      ))}
      {/* Screen frame */}
      <mesh position={[0, 0.74, -1.09]} rotation={[-0.52, 0, 0]}>
        <boxGeometry args={[0.88, 0.6, 0.032]} />
        <meshStandardMaterial color="#111827" roughness={0.3} metalness={0.8} />
      </mesh>
      {/* Screen display */}
      <mesh ref={screenMeshRef} position={[0, 0.74, -1.075]} rotation={[-0.52, 0, 0]}>
        <boxGeometry args={[0.8, 0.52, 0.008]} />
        <meshStandardMaterial
          color="#0d1117"
          emissive="#06b6d4"
          emissiveIntensity={0.45}
          roughness={0.1}
        />
      </mesh>

      {/* ── Code lines on screen ── */}
      {/* Line 1 – purple keyword */}
      <mesh position={[-0.09, 0.845, -1.035]} rotation={[-0.52, 0, 0]}>
        <boxGeometry args={[0.3, 0.022, 0.004]} />
        <meshStandardMaterial color="#c084fc" emissive="#c084fc" emissiveIntensity={2.5} />
      </mesh>
      {/* Line 1b – white identifier */}
      <mesh position={[0.15, 0.845, -1.035]} rotation={[-0.52, 0, 0]}>
        <boxGeometry args={[0.2, 0.02, 0.004]} />
        <meshStandardMaterial color="#e2e8f0" emissive="#e2e8f0" emissiveIntensity={1.5} />
      </mesh>
      {/* Line 2 – cyan function */}
      <mesh position={[-0.03, 0.805, -1.048]} rotation={[-0.52, 0, 0]}>
        <boxGeometry args={[0.28, 0.02, 0.004]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2.2} />
      </mesh>
      {/* Line 3 – green string */}
      <mesh position={[-0.06, 0.76, -1.062]} rotation={[-0.52, 0, 0]}>
        <boxGeometry args={[0.38, 0.02, 0.004]} />
        <meshStandardMaterial color="#4ade80" emissive="#4ade80" emissiveIntensity={2.2} />
      </mesh>
      {/* Line 4 – yellow value */}
      <mesh position={[0.09, 0.72, -1.074]} rotation={[-0.52, 0, 0]}>
        <boxGeometry args={[0.22, 0.02, 0.004]} />
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={2} />
      </mesh>
      {/* Line 5 – purple */}
      <mesh position={[-0.1, 0.675, -1.09]} rotation={[-0.52, 0, 0]}>
        <boxGeometry args={[0.3, 0.02, 0.004]} />
        <meshStandardMaterial color="#c084fc" emissive="#c084fc" emissiveIntensity={2.5} />
      </mesh>
      {/* Blinking cursor */}
      <mesh ref={cursorRef} position={[0.065, 0.675, -1.088]} rotation={[-0.52, 0, 0]}>
        <boxGeometry args={[0.012, 0.028, 0.004]} />
        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={3} />
      </mesh>

      {/* ── Coffee mug on desk ── */}
      <mesh position={[0.65, 0.325, -0.96]}>
        <cylinderGeometry args={[0.062, 0.055, 0.16, 10]} />
        <meshStandardMaterial color="#7c3aed" roughness={0.5} metalness={0.2} emissive="#7c3aed" emissiveIntensity={0.15} />
      </mesh>
      {/* Mug handle */}
      <mesh position={[0.715, 0.32, -0.96]}>
        <torusGeometry args={[0.028, 0.01, 6, 8, Math.PI]} />
        <meshStandardMaterial color="#6d28d9" />
      </mesh>
    </group>
  );
};

const CodingAvatar = () => (
  <Canvas
    camera={{ position: [1.4, 1.1, 4.6], fov: 44 }}
    gl={{ antialias: true, alpha: true }}
    style={{ background: "transparent", width: "100%", height: "100%" }}
  >
    <CodingPerson />
  </Canvas>
);

export default CodingAvatar;
