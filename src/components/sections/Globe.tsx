import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Instances, Instance } from '@react-three/drei'
import * as THREE from 'three'
import type { City } from '../../types'

// Major cities for markers
const cities: City[] = [
  { name: 'New York', lat: 40.7128, lon: -74.006 },
  { name: 'London', lat: 51.5074, lon: -0.1278 },
  { name: 'Tokyo', lat: 35.6762, lon: 139.6503 },
  { name: 'Singapore', lat: 1.3521, lon: 103.8198 },
  { name: 'San Francisco', lat: 37.7749, lon: -122.4194 },
  { name: 'Dubai', lat: 25.2048, lon: 55.2708 },
  { name: 'Hong Kong', lat: 22.3193, lon: 114.1694 },
  { name: 'Sydney', lat: -33.8688, lon: 151.2093 },
  { name: 'Berlin', lat: 52.52, lon: 13.405 },
  { name: 'Mumbai', lat: 19.076, lon: 72.8777 },
]

function latLonToVector3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

function GlobeMarkers() {
  return (
    <Instances limit={cities.length}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#FFB800" />
      {cities.map((city, i) => {
        const pos = latLonToVector3(city.lat, city.lon, 2.01)
        return <Instance key={i} position={pos} />
      })}
    </Instances>
  )
}

function Arc({ start, end }: { start: City; end: City }) {
  const ref = useRef<THREE.Group>(null)
  const startPos = latLonToVector3(start.lat, start.lon, 2)
  const endPos = latLonToVector3(end.lat, end.lon, 2)

  const curve = useMemo(() => {
    const mid = new THREE.Vector3()
      .addVectors(startPos, endPos)
      .multiplyScalar(0.5)
    mid.normalize().multiplyScalar(2.5)
    return new THREE.QuadraticBezierCurve3(startPos, mid, endPos)
  }, [startPos, endPos])

  const points = curve.getPoints(50)
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = (clock.getElapsedTime() * 0.2) % 1
      const point = curve.getPoint(t)
      const dotMesh = ref.current.children[1] as THREE.Mesh
      if (dotMesh) {
        dotMesh.position.copy(point)
      }
    }
  })

  return (
    <group ref={ref}>
      <primitive object={new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({
        color: '#FFB800',
        transparent: true,
        opacity: 0.2,
      }))} />
      <mesh>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshBasicMaterial color="#FFD060" />
      </mesh>
    </group>
  )
}

function RotatingGlobe() {
  const meshRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
    }
  })

  // Create arcs between random cities
  const arcs = useMemo(() => {
    const pairs = []
    for (let i = 0; i < 5; i++) {
      const start = cities[Math.floor(Math.random() * cities.length)]
      const end = cities[Math.floor(Math.random() * cities.length)]
      if (start !== end) {
        pairs.push({ start, end })
      }
    }
    return pairs
  }, [])

  return (
    <group ref={meshRef}>
      {/* Main sphere with grid */}
      <Sphere args={[2, 64, 64]}>
        <meshBasicMaterial
          color="#0c0d17"
          wireframe
          transparent
          opacity={0.1}
        />
      </Sphere>

      {/* City markers */}
      <GlobeMarkers />

      {/* Arcs */}
      {arcs.map((arc, i) => (
        <Arc key={i} start={arc.start} end={arc.end} />
      ))}
    </group>
  )
}

export default function Globe() {
  return (
    <div className="w-full aspect-square">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <RotatingGlobe />
      </Canvas>
    </div>
  )
}
