import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('renders a Counter', () => {
    render(<Counter name="example" />)

    expect(screen.getByText('example')).not.toBeNull()
  })
})
