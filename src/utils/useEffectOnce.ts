import { useEffect, useRef, EffectCallback } from 'react'

type UseEffectOnce = (callback: EffectCallback) => void

export const useEffectOnce: UseEffectOnce = (callback) => {
  const rer = useRef(true)

  useEffect(() => {
    if (rer.current) {
      rer.current = false
      callback()
    }
  }, [callback])
}
