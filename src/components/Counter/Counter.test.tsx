import { composeStories } from '@storybook/testing-react'
import { screen } from '@testing-library/react'
import { customRender } from '../../lib'
import * as stories from './Counter.stories'

const { Default } = composeStories(stories)

describe('Counter', () => {
  test('renders a Counter', () => {
    customRender(<Default />)
    expect(screen.getByText('example')).toBeInTheDocument()
  })
})
