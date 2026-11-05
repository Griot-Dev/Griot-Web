// GRIOT TECH — Pointer position hook with damped interpolation
import { useEffect, useRef, useCallback } from 'react'

interface PointerPosition {
  x: number  // -1 to 1
  y: number  // -1 to 1
  rawX: number
  rawY: number
}

export function usePointerPosition(damping = 0.08): React.MutableRefObject<PointerPosition> {
  const position = useRef<PointerPosition>({ x: 0, y: 0, rawX: 0, rawY: 0 })
  const target = useRef({ x: 0, y: 0 })
  const rafId = useRef<number>(0)

  const update = useCallback(() => {
    position.current.x += (target.current.x - position.current.x) * damping
    position.current.y += (target.current.y - position.current.y) * damping
    rafId.current = requestAnimationFrame(update)
  }, [damping])

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1
      target.current.y = -(e.clientY / window.innerHeight) * 2 + 1
      position.current.rawX = target.current.x
      position.current.rawY = target.current.y
    }

    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        target.current.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1
        target.current.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1
        position.current.rawX = target.current.x
        position.current.rawY = target.current.y
      }
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('touchmove', handleTouch, { passive: true })
    rafId.current = requestAnimationFrame(update)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('touchmove', handleTouch)
      cancelAnimationFrame(rafId.current)
    }
  }, [update])

  return position
}
