import { act, renderHook, waitFor } from '@testing-library/react'
import { expect, describe, it } from 'vitest'
import { useCount } from './useCount'

describe('useCount', () => {
  it('カウントされること', async () => {
    const { result } = renderHook(() => useCount())
    act(() => {
      result.current.increment()
    })
    await waitFor(async () => {
      expect(result.current.count).toBe(1)
    })
  })
})
