import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COLORS = [
  0xef4444, 0xf97316, 0x818cf8, 0x3b82f6, 0xa855f7, 0xeab308,
  0x60a5fa, 0x8b5cf6, 0xf87171, 0x10b981, 0x06b6d4, 0x34d399,
  0x94a3b8, 0xfbbf24,
]

const CITIES: [number, number][] = [
  [6.5, 3.4], [9.0, 7.5], [5.6, -0.2], [-1.3, 36.8], [-33.9, 18.4],
  [30.0, 31.2], [4.0, 9.7], [14.7, -17.4], [-18.9, 47.5], [15.6, 32.5],
  [51.5, -0.12], [48.8, 2.35], [52.5, 13.4], [41.9, 12.5], [40.4, -3.7],
  [59.9, 10.7], [52.4, 4.9], [60.2, 24.9], [47.4, 8.5], [55.7, 12.5],
  [40.7, -74.0], [37.8, -122.4], [45.5, -73.5], [19.4, -99.1], [-23.5, -46.6],
  [-34.6, -58.4], [4.7, -74.1], [10.5, -66.9], [-12.0, -77.0], [33.4, -112.1],
  [35.7, 139.7], [31.2, 121.5], [1.35, 103.8], [28.6, 77.2], [25.2, 55.3],
  [37.6, 126.9], [22.3, 114.2], [3.1, 101.7], [-27.5, 153.0], [-33.9, 151.2],
]

const PAIRS: [number, number][] = [
  [0, 20], [1, 20], [2, 10], [3, 30], [4, 21], [5, 11], [6, 20], [7, 10], [8, 32], [9, 10],
  [10, 30], [11, 24], [12, 11], [13, 21], [14, 12], [15, 11], [16, 12], [17, 20], [18, 30], [19, 10],
  [20, 30], [21, 31], [22, 10], [23, 32], [24, 10], [25, 11], [26, 20], [27, 21], [28, 10], [29, 30],
  [30, 20], [31, 21], [32, 24], [33, 11], [34, 12], [35, 30], [36, 32], [37, 24], [38, 10], [39, 20],
  [0, 30], [1, 31], [4, 32], [5, 33], [6, 34], [7, 35], [2, 22], [3, 23], [8, 38], [9, 39],
  [10, 36], [11, 37], [12, 38], [13, 39], [14, 30], [15, 31], [16, 32], [17, 33], [18, 34], [19, 35],
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [7, 8], [9, 0], [10, 11], [11, 12],
  [12, 13], [13, 14], [20, 21], [21, 22], [22, 23], [23, 24], [24, 25], [30, 31], [31, 32], [32, 33],
  [33, 34], [34, 35], [35, 36], [36, 37], [37, 38], [38, 39], [4, 30], [0, 32], [5, 30], [4, 34],
  [2, 30], [8, 20], [9, 21], [6, 22], [7, 23], [3, 37], [0, 10], [1, 11], [2, 12], [3, 13],
]

function ll(lat: number, lon: number, r = 1.013): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180)
  const th = (lon + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(th),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(th)
  )
}

function makeFallbackTexture(): THREE.CanvasTexture {
  const width = 2048
  const height = 1024
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')!
  const gradient = ctx.createLinearGradient(0, 0, 0, height)
  gradient.addColorStop(0, '#020c1a')
  gradient.addColorStop(0.5, '#04152a')
  gradient.addColorStop(1, '#020c1a')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)
  ctx.strokeStyle = 'rgba(8,30,70,0.2)'
  ctx.lineWidth = 0.5

  for (let lat = -80; lat <= 80; lat += 10) {
    const y = (90 - lat) / 180 * height
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }

  for (let lon = -180; lon < 180; lon += 10) {
    const x = (lon + 180) / 360 * width
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
    ctx.stroke()
  }

  const point = (lon: number, lat: number): [number, number] => [
    (lon + 180) / 360 * width,
    (90 - lat) / 180 * height,
  ]
  const poly = (points: [number, number][], fill: string) => {
    ctx.beginPath()
    points.forEach(([lon, lat], i) => {
      const [x, y] = point(lon, lat)
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    })
    ctx.closePath()
    ctx.fillStyle = fill
    ctx.fill()
    ctx.strokeStyle = '#1c4060'
    ctx.lineWidth = 1.2
    ctx.stroke()
  }

  const land = '#0c1e32'
  poly([[-168, 72], [-140, 70], [-124, 47], [-97, 26], [-83, 10], [-77, 7], [-90, 18], [-117, 32], [-130, 56], [-168, 64]], land)
  poly([[-95, 48], [-65, 44], [-55, 50], [-75, 70], [-95, 75], [-125, 70], [-120, 60], [-100, 49]], land)
  poly([[-55, 83], [-20, 84], [-15, 78], [-40, 66], [-60, 72]], land)
  poly([[-80, 12], [-52, 5], [-35, -4], [-45, -23], [-68, -50], [-68, -56], [-73, -46], [-70, -18], [-80, 5]], land)
  poly([[-10, 36], [14, 44], [28, 42], [30, 46], [20, 55], [0, 60], [-8, 52]], land)
  poly([[5, 58], [20, 63], [25, 68], [28, 71], [20, 70], [12, 63], [8, 60]], land)
  poly([[-5, 50], [2, 52], [-4, 57], [-3, 60], [-1, 60], [0, 57], [-2, 52]], land)
  poly([[-18, 15], [42, 12], [44, 15], [42, 20], [35, 30], [32, 32], [15, 33], [0, 35], [-15, 30]], land)
  poly([[35, 5], [50, 12], [44, 11], [42, 12]], land)
  poly([[14, -22], [36, -22], [37, -35], [25, -34], [17, -29]], land)
  poly([[26, 42], [70, 55], [90, 58], [120, 45], [130, 40], [125, 28], [100, 5], [100, 2], [115, -8], [120, 0], [95, 20], [50, 28], [35, 42]], land)
  poly([[35, 30], [58, 24], [57, 20], [50, 12], [44, 11], [42, 20], [38, 22]], land)
  poly([[65, 22], [76, 18], [80, 8], [79, 20], [75, 28]], land)
  poly([[114, -22], [150, -22], [154, -28], [150, -36], [138, -36], [114, -25]], land)
  poly([[131, 31], [138, 40], [142, 40], [140, 36], [135, 34]], land)

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

interface Route {
  curve: THREE.QuadraticBezierCurve3
  arc: THREE.Line
  arcMat: THREE.LineBasicMaterial
  dotMat: THREE.MeshBasicMaterial
  dotMesh: THREE.Mesh
  t: number
  speed: number
}

function GlobeScene() {
  const globeGroupRef = useRef<THREE.Group>(null)
  const routesRef = useRef<Route[]>([])
  const gTRef = useRef(2.1)

  useEffect(() => {
    const group = globeGroupRef.current
    if (!group) return

    const globeGeo = new THREE.SphereGeometry(1, 72, 72)
    const globeMat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      emissive: new THREE.Color(0x062a66),
      emissiveIntensity: 0.62,
      shininess: 6,
      specular: new THREE.Color(0x123a75),
    })
    globeMat.map = makeFallbackTexture()
    const globeMesh = new THREE.Mesh(globeGeo, globeMat)
    group.add(globeMesh)

    const loader = new THREE.TextureLoader()
    loader.crossOrigin = 'anonymous'
    loader.load(
      'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
      tex => {
        tex.colorSpace = THREE.SRGBColorSpace
        globeMat.map = tex
        globeMat.needsUpdate = true
      },
      undefined,
      () => {
        globeMat.map = makeFallbackTexture()
        globeMat.needsUpdate = true
      }
    )

    const dotGeometries: THREE.SphereGeometry[] = []
    CITIES.forEach(([lat, lon], i) => {
      const dotGeo = new THREE.SphereGeometry(0.011, 8, 8)
      const dot = new THREE.Mesh(
        dotGeo,
        new THREE.MeshBasicMaterial({ color: COLORS[i % COLORS.length] })
      )
      dot.position.copy(ll(lat, lon))
      group.add(dot)
      dotGeometries.push(dotGeo)
    })

    const routes: Route[] = []
    PAIRS.forEach(([fi, ti], idx) => {
      if (fi >= CITIES.length || ti >= CITIES.length || fi === ti) return
      const col = COLORS[idx % COLORS.length]
      const s = ll(CITIES[fi][0], CITIES[fi][1])
      const e = ll(CITIES[ti][0], CITIES[ti][1])
      const arcH = 1.48 + Math.random() * 0.2
      const mid = s.clone().add(e).multiplyScalar(0.5).normalize().multiplyScalar(arcH)
      const curve = new THREE.QuadraticBezierCurve3(s, mid, e)
      const arcMat = new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0 })
      const arc = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(80)), arcMat)
      const dotMat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0 })
      const dotMesh = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 8), dotMat)

      group.add(arc)
      group.add(dotMesh)
      routes.push({ curve, arc, arcMat, dotMat, dotMesh, t: Math.random(), speed: 0.015 + Math.random() * 0.008 })
    })
    routesRef.current = routes

    return () => {
      group.clear()
      globeGeo.dispose()
      globeMat.map?.dispose()
      globeMat.dispose()
      dotGeometries.forEach(geometry => geometry.dispose())
      routes.forEach(route => {
        route.arc.geometry.dispose()
        route.arcMat.dispose()
        route.dotMat.dispose()
        route.dotMesh.geometry.dispose()
      })
      routesRef.current = []
    }
  }, [])

  useFrame(() => {
    const group = globeGroupRef.current
    if (!group) return

    gTRef.current += 0.006
    group.rotation.y = gTRef.current * 0.27

    routesRef.current.forEach(route => {
      route.t += route.speed
      if (route.t > 1) route.t -= 1
      const fade = Math.sin(route.t * Math.PI)
      route.arcMat.opacity = fade * 0.85
      route.dotMat.opacity = Math.min(fade * 3, 1)
      route.dotMesh.position.copy(route.curve.getPoint(route.t))
    })
  })

  return (
    <>
      <mesh>
        <sphereGeometry args={[1.055, 32, 32]} />
        <meshBasicMaterial color={0x1a6fff} transparent opacity={0.06} side={THREE.BackSide} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.10, 32, 32]} />
        <meshBasicMaterial color={0xffb800} transparent opacity={0.018} side={THREE.BackSide} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.004, 72, 72]} />
        <meshBasicMaterial color={0x0b3f91} transparent opacity={0.12} blending={THREE.AdditiveBlending} />
      </mesh>
      <group ref={globeGroupRef} />
    </>
  )
}

export default function Globe() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 2.6], fov: 45, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: 'transparent' }}
      >
        <ambientLight color={0x223355} intensity={1.1} />
        <directionalLight color={0xffffff} intensity={1.3} position={[4, 2, 3]} />
        <directionalLight color={0x4466bb} intensity={0.35} position={[-3, -1, -2]} />
        <GlobeScene />
      </Canvas>
    </div>
  )
}
