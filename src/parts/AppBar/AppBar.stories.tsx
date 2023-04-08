import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { AppBar } from './AppBar'

type Story = ComponentStoryObj<typeof AppBar>

export default {
  args: {},
  component: AppBar,
  title: 'parts/AppBar',
} as ComponentMeta<typeof AppBar>

export const Default: Story = {}
