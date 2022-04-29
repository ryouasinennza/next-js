import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Footer } from './Footer'

type Story = ComponentStoryObj<typeof Footer>

export default {
  args: {
    copyright: 'copyright',
    links: [],
    siteName: 'siteName',
  },
  component: Footer,
  title: 'parts/Footer',
} as ComponentMeta<typeof Footer>

export const Default: Story = {}
