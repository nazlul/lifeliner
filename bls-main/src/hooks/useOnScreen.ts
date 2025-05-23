import { useEffect, useState, RefObject } from 'react'

export function useOnScreen(ref: RefObject<Element | null>, rootMargin = '0px') {
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const current = ref.current
    if (!current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.intersectionRatio >= 0.6) 
      },
      {
        rootMargin,
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), 
      }
    )

    observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [ref, rootMargin])

  return isVisible
}
