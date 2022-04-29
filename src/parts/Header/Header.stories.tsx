import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Header } from './Header'

type Story = ComponentStoryObj<typeof Header>

export default {
  args: {
    title: 'example',
  },
  component: Header,
  title: 'parts/Header',
} as ComponentMeta<typeof Header>

export const Default: Story = {}
