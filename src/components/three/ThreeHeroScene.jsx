import { Canvas } from '@react-three/fiber'
import { Environment, Float, Sparkles } from '@react-three/drei'
import FloatingFoodModel from './FloatingFoodModel'

function ThreeHeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 7], fov: 42 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 4, 5]} intensity={2.4} color="#ffb36b" />
        <pointLight position={[-3, -2, 3]} intensity={2} color="#ff7a1a" />
        <Float speed={1.8} rotationIntensity={0.28} floatIntensity={0.75}>
          <FloatingFoodModel />
        </Float>
        <Sparkles count={42} color="#ff7a1a" scale={[6, 4, 3]} size={2.2} speed={0.32} />
        <Environment preset="warehouse" />
      </Canvas>
    </div>
  )
}

export default ThreeHeroScene
