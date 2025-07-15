"use client"

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { AnimatedSphere } from './animated-sphere'
import { FloatingElements } from './floating-elements'

interface SceneProps {
  className?: string
}

export function Scene({ className }: SceneProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3B82F6" />
        
        <AnimatedSphere />
        <FloatingElements />
        
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}