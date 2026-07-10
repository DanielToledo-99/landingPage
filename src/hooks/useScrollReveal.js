import { useEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll
      ? [el, ...el.querySelectorAll('.reveal')]
      : [el]

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    targets.forEach((t) => {
      t.classList.add('animate-on-scroll')
      obs.observe(t)
    })

    return () => obs.disconnect()
  }, [threshold])

  return ref
}
