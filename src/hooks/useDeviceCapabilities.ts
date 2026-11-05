// GRIOT TECH — Device capability detection hook
import { useState, useEffect } from 'react'

interface DeviceCapabilities {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  hasWebGL: boolean
  hasGPU: boolean
  pixelRatio: number
  tier: 'low' | 'mid' | 'high'
}

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

function getDeviceTier(): 'low' | 'mid' | 'high' {
  const memory = (navigator as { deviceMemory?: number }).deviceMemory
  const cores = navigator.hardwareConcurrency || 2

  if (memory && memory <= 2) return 'low'
  if (cores <= 2) return 'low'
  if (memory && memory <= 4) return 'mid'
  if (cores <= 4) return 'mid'
  return 'high'
}

export function useDeviceCapabilities(): DeviceCapabilities {
  const [caps, setCaps] = useState<DeviceCapabilities>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    hasWebGL: true,
    hasGPU: true,
    pixelRatio: 1,
    tier: 'high',
  })

  useEffect(() => {
    const w = window.innerWidth
    const webgl = detectWebGL()
    const tier = getDeviceTier()

    setCaps({
      isMobile: w < 768,
      isTablet: w >= 768 && w < 1024,
      isDesktop: w >= 1024,
      hasWebGL: webgl,
      hasGPU: webgl && tier !== 'low',
      pixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      tier,
    })
  }, [])

  return caps
}
