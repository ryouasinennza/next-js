import { Meta, StoryObj } from '@storybook/react'
import { Counter } from './Counter'

type Story = StoryObj<typeof Counter>

const meta: Meta<typeof Counter> = {
  args: {
    countText: '加算減算',
    upDownText: '加算減算切替',
  },
  component: Counter,
  title: 'parts/Counter',
}

export default meta

export const DefaultStory: Story = {}
