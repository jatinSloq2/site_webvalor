"use client"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Sphere } from '@react-three/drei'
import * as THREE from 'three'

export function FloatingElements() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={group}>
      {/* Floating boxes */}
      <Box position={[2, 1, 0]} scale={0.3}>
        <meshStandardMaterial color="#6366F1" transparent opacity={0.7} />
      </Box>
      <Box position={[-2, -1, 1]} scale={0.2}>
        <meshStandardMaterial color="#3B82F6" transparent opacity={0.5} />
      </Box>
      <Sphere position={[1, -2, -1]} scale={0.4}>
        <meshStandardMaterial color="#8B5CF6" transparent opacity={0.6} />
      </Sphere>
      <Sphere position={[-1.5, 2, 0.5]} scale={0.25}>
        <meshStandardMaterial color="#06B6D4" transparent opacity={0.8} />
      </Sphere>
    </group>
  )
}