import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-test-renderer'
import { useCounter, UseCounterReturn } from './useCounter'

describe('useCounter', () => {
  test('初期値が0であること', () => {
    const { result } = renderHook<'', UseCounterReturn>(() => useCounter())
    expect(result.current.countState).toBe(0)
  })

  test('初期値がupであること', () => {
    const { result } = renderHook<'', UseCounterReturn>(() => useCounter())
    expect(result.current.upDownState).toBe('up')
  })

  test('加算されること', () => {
    const { result } = renderHook<'', UseCounterReturn>(() => useCounter())
    act(() => {
      result.current.changeCount()
    })
    expect(result.current.upDownState).toBe('up')
    expect(result.current.countState).toBe(1)
  })

  test('減算されること', () => {
    const { result } = renderHook<'', UseCounterReturn>(() => useCounter())
    act(() => {
      result.current.changeUpDown()
    })
    act(() => {
      result.current.changeCount()
    })
    expect(result.current.upDownState).toBe('down')
    expect(result.current.countState).toBe(-1)
  })
})
