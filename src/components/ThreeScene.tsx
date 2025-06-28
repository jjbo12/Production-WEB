import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls, Text, Float } from '@react-three/drei';
import * as THREE from 'three';

function InteractiveBrain() {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  
  // Create neural network connections
  const connections = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      start: [
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
      ] as [number, number, number],
      end: [
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
      ] as [number, number, number],
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      sphereRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central AI Brain */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={sphereRef} args={[1.2, 64, 64]} scale={1.5}>
          <MeshDistortMaterial
            color="#0ea5e9"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>

      {/* Neural Network Connections */}
      {connections.map((connection) => (
        <NeuralConnection key={connection.id} start={connection.start} end={connection.end} />
      ))}

      {/* Floating Data Nodes */}
      {Array.from({ length: 12 }, (_, i) => (
        <DataNode key={i} position={[
          Math.cos((i / 12) * Math.PI * 2) * 3,
          Math.sin((i / 12) * Math.PI * 2) * 3,
          (Math.random() - 0.5) * 2,
        ]} delay={i * 0.1} />
      ))}

      {/* AI Label */}
      <Float speed={2} rotationIntensity={0} floatIntensity={1}>
        <Text
          position={[0, -3, 0]}
          fontSize={0.5}
          color="#a855f7"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          AI POWERED
        </Text>
      </Float>
    </group>
  );
}

function NeuralConnection({ start, end }: { start: [number, number, number], end: [number, number, number] }) {
  const lineRef = useRef<THREE.BufferGeometry>(null);
  
  useFrame((state) => {
    if (lineRef.current) {
      const positions = lineRef.current.attributes.position.array as Float32Array;
      const time = state.clock.elapsedTime;
      
      // Animate the connection with a pulse effect
      const pulse = Math.sin(time * 2) * 0.1 + 1;
      positions[3] = end[0] * pulse;
      positions[4] = end[1] * pulse;
      positions[5] = end[2] * pulse;
      
      lineRef.current.attributes.position.needsUpdate = true;
    }
  });

  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  
  return (
    <line>
      <bufferGeometry ref={lineRef}>
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array([...start, ...end])}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#a855f7" transparent opacity={0.3} />
    </line>
  );
}

function DataNode({ position, delay }: { position: [number, number, number], delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime + delay;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 + delay;
      
      // Pulsing effect
      const pulse = Math.sin(state.clock.elapsedTime * 2 + delay) * 0.2 + 1;
      meshRef.current.scale.setScalar(pulse * 0.3);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.2, 0]} />
      <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={0.2} />
    </mesh>
  );
}

function FloatingCubes() {
  const cubes = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
      ] as [number, number, number],
      scale: Math.random() * 0.4 + 0.2,
      rotationSpeed: Math.random() * 0.02 + 0.01,
      color: i % 3 === 0 ? '#0ea5e9' : i % 3 === 1 ? '#a855f7' : '#22c55e',
    }));
  }, []);

  return (
    <>
      {cubes.map((cube) => (
        <FloatingCube key={cube.id} {...cube} />
      ))}
    </>
  );
}

function FloatingCube({ position, scale, rotationSpeed, color }: { 
  position: [number, number, number], 
  scale: number, 
  rotationSpeed: number,
  color: string 
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.8;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.5 + position[2]) * 0.3;
    }
  });

  return (
    <Float speed={1 + Math.random()} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.7}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

interface ThreeSceneProps {
  variant?: 'brain' | 'cubes';
}

export default function ThreeScene({ variant = 'brain' }: ThreeSceneProps) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#a855f7" intensity={0.5} />
        <pointLight position={[0, 10, -10]} color="#22c55e" intensity={0.3} />
        
        {variant === 'brain' ? <InteractiveBrain /> : <FloatingCubes />}
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}