import { LegacyRef, useCallback, useLayoutEffect, useState } from 'react'

const getDimensionsObject = (node: HTMLDivElement) => {
  const react = node.getBoundingClientRect()

  return {
    width: react.width,
    height: react.height
  }
}

type UseSize = {
  ref: LegacyRef<HTMLDivElement> | undefined
  dimensions: { width: number; height: number }
}

const useSize = (): UseSize => {
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0
  })
  const [node, setNode] = useState<HTMLDivElement>()

  const ref = useCallback((instance: HTMLDivElement | null) => {
    if (instance) {
      setNode(instance)
    }
  }, [])

  useLayoutEffect(() => {
    if (node) {
      const measure = () => setDimensions(getDimensionsObject(node))
      measure()
    }
  }, [node])

  return { ref, dimensions }
}

export default useSize
