import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function FloatingFoodModel() {
  const group = useRef()

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.32) * 0.28
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.24) * 0.08
  })

  return (
    <group ref={group} rotation={[0.25, -0.4, 0]} scale={1.15}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.2, 2.2, 0.18, 96]} />
        <meshStandardMaterial color="#f8f0df" roughness={0.55} metalness={0.05} />
      </mesh>
      <mesh position={[0, 0.16, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.42, 0.18, 24, 96]} />
        <meshStandardMaterial color="#ff7a1a" roughness={0.42} />
      </mesh>
      {[
        [-0.75, 0.35, 0.25, '#7a2d10'],
        [0.15, 0.42, -0.2, '#1f8a4c'],
        [0.75, 0.38, 0.15, '#f0c44f'],
        [-0.1, 0.48, 0.45, '#d9480f'],
      ].map(([x, y, z, color]) => (
        <mesh key={`${x}-${z}`} position={[x, y, z]}>
          <sphereGeometry args={[0.42, 32, 32]} />
          <meshStandardMaterial color={color} roughness={0.65} />
        </mesh>
      ))}
    </group>
  )
}

export default FloatingFoodModel
