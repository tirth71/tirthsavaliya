import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useRef, useState, useEffect, useMemo } from 'react';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const sphere = useMemo(() => random.inSphere(new Float32Array(4500), { radius: 1.8 }), []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 18;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f2ff"
          size={0.004}
          sizeAttenuation
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.6}>
      <mesh ref={meshRef} scale={0.18}>
        <torusKnotGeometry args={[1, 0.35, 128, 16]} />
        <meshStandardMaterial color="#00f2ff" wireframe transparent opacity={0.4} />
      </mesh>
    </Float>
  );
}

function HoverGlow() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.x += (mouse.current.x * 2 - meshRef.current.position.x) * 0.08;
      meshRef.current.position.y += (mouse.current.y * 1.5 - meshRef.current.position.y) * 0.08;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -1]}>
      <circleGeometry args={[0.8, 32]} />
      <meshBasicMaterial color="#00f2ff" transparent opacity={0.04} />
    </mesh>
  );
}

function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 0.08;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 0.08;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.current.x - camera.position.x) * 0.05;
    camera.position.y += (-mouse.current.y - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export const Scene = () => (
  <div className="fixed inset-0 -z-10 bg-background">
    <Canvas camera={{ position: [0, 0, 1], fov: 60 }} dpr={[1, 2]}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00f2ff" />
      <pointLight position={[-10, -10, 5]} intensity={0.3} color="#ffffff" />
      <FloatingGeometry />
      <ParticleField />
      <HoverGlow />
      <CameraRig />
    </Canvas>
  </div>
);
