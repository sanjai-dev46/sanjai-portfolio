import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';

function StarField() {
  const ref = useRef();
  const count = 3000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.03;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f5d4"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingRing() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    ref.current.rotation.z = state.clock.elapsedTime * 0.1;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
  });
  return (
    <mesh ref={ref} position={[3, 0, -2]}>
      <torusGeometry args={[1.2, 0.03, 16, 100]} />
      <meshStandardMaterial color="#f72585" emissive="#f72585" emissiveIntensity={0.5} />
    </mesh>
  );
}

function FloatingRing2() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    ref.current.rotation.x = state.clock.elapsedTime * 0.08;
    ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.5;
  });
  return (
    <mesh ref={ref} position={[-3.5, 1, -3]}>
      <torusGeometry args={[0.8, 0.02, 16, 80]} />
      <meshStandardMaterial color="#00f5d4" emissive="#00f5d4" emissiveIntensity={0.4} />
    </mesh>
  );
}

function FloatingSphere() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.4;
    ref.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.3;
  });
  return (
    <mesh ref={ref} position={[-2, -1.5, -1]}>
      <sphereGeometry args={[0.12, 16, 16]} />
      <meshStandardMaterial color="#f72585" emissive="#f72585" emissiveIntensity={1} />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0,
      width: '100%', height: '100%',
      zIndex: 0, pointerEvents: 'none'
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} color="#00f5d4" intensity={1} />
        <pointLight position={[-10, -10, -5]} color="#f72585" intensity={0.5} />
        <StarField />
        <FloatingRing />
        <FloatingRing2 />
        <FloatingSphere />
      </Canvas>
    </div>
  );
}
