import { screen } from '@testing-library/react'
import { customRender } from '../../lib'
import { Counter } from './Counter'

describe('Counter', () => {
  test('renders a Counter', () => {
    customRender(<Counter name="example" />)
    expect(screen.getByText('example')).not.toBeNull()
  })
})
