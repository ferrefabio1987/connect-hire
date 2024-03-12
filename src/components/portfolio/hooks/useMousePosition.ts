import { RefObject, useEffect, useState } from 'react'

const useMousePosition = (ref: RefObject<HTMLDivElement>) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (ref?.current != null) {
      const updateMousePosition = (event: MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY })
      }

      ref.current.addEventListener('mousemove', updateMousePosition)

      // eslint-disable-next-line react-hooks/exhaustive-deps
      return () => ref.current?.removeEventListener('mousemove', updateMousePosition)
    }
  }, [ref])

  return mousePosition
}

export default useMousePosition
