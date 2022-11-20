import { composeStories } from '@storybook/testing-react'
import { act, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { customRender } from '../../utils'
import * as stories from './Counter.stories'

describe('Counter', () => {
  const { Default } = composeStories(stories)

  test('全てがレンダリングされていること', () => {
    customRender(<Default />)
    expect(screen.getByRole('button', { name: '加算減算' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '加算減算切替' })).toBeInTheDocument()
    expect(screen.getByText('up!')).toBeInTheDocument()
    expect(screen.getByText('0!')).toBeInTheDocument()
  })

  test('加算されること', () => {
    customRender(<Default />)
    const changeCountButton = screen.getByRole('button', { name: '加算減算' })
    act(() => {
      changeCountButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
    expect(screen.getByText('1!')).toBeInTheDocument()
  })

  test('減算されること', () => {
    customRender(<Default />)
    const changeCountButton = screen.getByRole('button', { name: '加算減算' })
    const changeUpDownButton = screen.getByRole('button', { name: '加算減算切替' })
    act(() => {
      changeUpDownButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
    act(() => {
      changeCountButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
    expect(screen.getByText('-1!')).toBeInTheDocument()
    expect(screen.getByText('down!')).toBeInTheDocument()
  })
})
