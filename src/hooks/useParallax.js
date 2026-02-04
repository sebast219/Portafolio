import { useEffect, useState } from 'react'

export function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallax = scrolled * speed
      setOffset(parallax)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return offset
}
