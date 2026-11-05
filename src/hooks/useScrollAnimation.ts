// GRIOT TECH — GSAP ScrollTrigger hook
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export function useScrollAnimation<T extends HTMLElement>(
  animationFactory: (el: T, tl: gsap.core.Timeline) => void,
  deps: unknown[] = []
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true,
      },
    })

    animationFactory(el, tl)

    // Ensure positions recalculate accurately after mount
    ScrollTrigger.refresh()

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === el) st.kill()
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}

// Simple fade-up animation for elements
export function useFadeIn<T extends HTMLElement>(delay = 0) {
  return useScrollAnimation<T>((el, tl) => {
    tl.from(el, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      delay,
      ease: 'power3.out',
    })
  })
}
