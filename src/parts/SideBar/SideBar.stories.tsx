import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { SideBar } from './SideBar'

type Story = ComponentStoryObj<typeof SideBar>

export default {
  args: {
    links: [
      {
        text: 'home',
        url: '/',
      },
    ],
  },
  component: SideBar,
  title: 'parts/SideBar',
} as ComponentMeta<typeof SideBar>

export const Default: Story = {}
