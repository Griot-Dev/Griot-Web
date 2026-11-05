// GRIOT TECH — Animated orange connection lines with dash animation
import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ConnectionLinesProps {
  reducedMotion?: boolean
}

/** Small glowing endpoint sphere */
function EndpointDot({ position }: { position: THREE.Vector3 }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.018, 8, 8]} />
      <meshBasicMaterial color="#F47716" transparent opacity={0.9} />
    </mesh>
  )
}

/** A single animated dashed curve */
function DashedCurve({
  start,
  end,
  index,
  reducedMotion,
}: {
  start: THREE.Vector3
  end: THREE.Vector3
  index: number
  reducedMotion: boolean
}) {
  // Build a CatmullRomCurve3 with a random midpoint
  const { geometry, curve } = useMemo(() => {
    const mid = new THREE.Vector3()
      .addVectors(start, end)
      .multiplyScalar(0.5)
    // Offset midpoint for curve shape
    const offset = new THREE.Vector3(
      (Math.random() - 0.5) * 0.6,
      (Math.random() - 0.5) * 0.6,
      (Math.random() - 0.5) * 0.4
    )
    mid.add(offset)

    const c = new THREE.CatmullRomCurve3([start.clone(), mid, end.clone()])
    const pts = c.getPoints(48)
    const geo = new THREE.BufferGeometry().setFromPoints(pts)

    return { geometry: geo, curve: c }
  }, [start, end])

  // Compute line distances for dashed material
  useEffect(() => {
    geometry.computeBoundingSphere()
    // compute line distances manually
    const pos = geometry.getAttribute('position')
    const distances = new Float32Array(pos.count)
    let d = 0
    for (let i = 0; i < pos.count; i++) {
      if (i > 0) {
        const dx = pos.getX(i) - pos.getX(i - 1)
        const dy = pos.getY(i) - pos.getY(i - 1)
        const dz = pos.getZ(i) - pos.getZ(i - 1)
        d += Math.sqrt(dx * dx + dy * dy + dz * dz)
      }
      distances[i] = d
    }
    geometry.setAttribute('lineDistance', new THREE.Float32BufferAttribute(distances, 1))

    return () => {
      geometry.dispose()
    }
  }, [geometry])

  // Build Three.js line object
  const lineObj = useMemo(() => {
    const mat = new THREE.LineDashedMaterial({
      color: '#F47716',
      transparent: true,
      opacity: 0.5,
      dashSize: 0.08,
      gapSize: 0.06,
    })
    return new THREE.Line(geometry, mat)
  }, [geometry])

  useEffect(() => {
    return () => {
      lineObj.material.dispose()
    }
  }, [lineObj])

  // Animate dashOffset
  useFrame(({ clock }) => {
    if (reducedMotion) return
    const mat = lineObj.material as THREE.LineDashedMaterial
    mat.dashSize = 0.08
    mat.gapSize = 0.06
    const t = clock.getElapsedTime()
    // @ts-expect-error - dashOffset exists on LineDashedMaterial at runtime
    mat.dashOffset = -(t * 0.12 + index * 0.5)
  })

  return <primitive object={lineObj} />
}

export function ConnectionLines({ reducedMotion = false }: ConnectionLinesProps) {
  // Generate random vertex pairs in a sphere for the 8 connection lines
  const connections = useMemo(() => {
    const pairs: { start: THREE.Vector3; end: THREE.Vector3 }[] = []
    const rng = (seed: number) => {
      // Simple deterministic pseudo-random
      const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453
      return x - Math.floor(x)
    }

    for (let i = 0; i < 8; i++) {
      const theta1 = rng(i * 2) * Math.PI * 2
      const phi1 = Math.acos(2 * rng(i * 2 + 1) - 1)
      const r1 = 0.5 + rng(i * 3) * 0.6

      const theta2 = rng(i * 5 + 10) * Math.PI * 2
      const phi2 = Math.acos(2 * rng(i * 5 + 11) - 1)
      const r2 = 0.5 + rng(i * 7 + 3) * 0.6

      pairs.push({
        start: new THREE.Vector3(
          r1 * Math.sin(phi1) * Math.cos(theta1),
          r1 * Math.sin(phi1) * Math.sin(theta1),
          r1 * Math.cos(phi1)
        ),
        end: new THREE.Vector3(
          r2 * Math.sin(phi2) * Math.cos(theta2),
          r2 * Math.sin(phi2) * Math.sin(theta2),
          r2 * Math.cos(phi2)
        ),
      })
    }

    return pairs
  }, [])

  return (
    <group>
      {connections.map((c, i) => (
        <group key={i}>
          <DashedCurve
            start={c.start}
            end={c.end}
            index={i}
            reducedMotion={reducedMotion}
          />
          <EndpointDot position={c.start} />
          <EndpointDot position={c.end} />
        </group>
      ))}
    </group>
  )
}
