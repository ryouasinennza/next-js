import { useEffect, useRef, EffectCallback } from 'react'

export const useEffectOnce = (callback: EffectCallback): void => {
  const rer = useRef(true)

  useEffect(() => {
    if (rer.current) {
      rer.current = false
      callback()
    }
  }, [callback])
}
