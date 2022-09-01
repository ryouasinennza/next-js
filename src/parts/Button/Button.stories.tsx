import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Button } from './Button'

type Story = ComponentStoryObj<typeof Button>

export default {
  args: {
    outline: true,
    text: 'Button',
  },
  component: Button,
  title: 'parts/Button',
} as ComponentMeta<typeof Button>

export const Default: Story = {}

export const Hiragana: Story = {
  args: {
    outline: false,
    text: 'ぼたん',
  },
}
