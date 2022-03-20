import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from './useCounter'
import '@testing-library/jest-dom'

describe('useCounter', () => {
  test('countの初期値は0になっていること', () => {
    const result = renderHook(() => useCounter({ initialCount: 0 })).result
    expect(result.current.count).toBe(0)
  })

  test('+2されること', async () => {
    const result = renderHook(() => useCounter({ initialCount: 0 })).result
    await act(async () => {
      await result.current.upCountHandler()
      await result.current.upCountHandler()
    })
    expect(result.current.count).toBe(2)
  })

  test('-1されること', () => {
    const result = renderHook(() => useCounter({ initialCount: 2 })).result
    act(() => {
      result.current.downCountHandler()
    })
    expect(result.current.count).toBe(1)
  })
})
