import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Counter } from './Counter'

type Story = ComponentStoryObj<typeof Counter>

export default {
  args: {
    countText: '加算減算',
    upDownText: '加算減算切替',
  },
  component: Counter,
  title: 'parts/Counter',
} as ComponentMeta<typeof Counter>

export const Default: Story = {}
