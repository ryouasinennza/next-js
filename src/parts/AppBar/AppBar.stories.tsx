import { Meta, StoryObj } from '@storybook/react'
import { AppBar } from './AppBar'

type Story = StoryObj<typeof AppBar>

const meta: Meta<typeof AppBar> = {
  args: {},
  component: AppBar,
  title: 'parts/AppBar',
}

export default meta

export const DefaultStory: Story = {}
