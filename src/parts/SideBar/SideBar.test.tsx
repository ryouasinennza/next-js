import { composeStories } from '@storybook/testing-react'
import { act, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { customRender } from '../../lib'
import * as stories from './SideBar.stories'
import 'jest-styled-components'

describe('SideBar', () => {
  const { Default } = composeStories(stories)

  test('hrefが入っていること', () => {
    customRender(<Default />)
    const links = screen.getAllByRole('link')
    for (const link of links) {
      expect(link.getAttribute('href')).not.toBeNull()
    }
  })

  test('サイドバーが開くこと', () => {
    customRender(<Default />)
    const button = screen.getByRole('button')
    const aside = screen.getByRole('complementary')
    expect(aside).toHaveStyleRule('right', '-100vw')
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
    expect(aside).toHaveStyleRule('right', '0')
  })
})
