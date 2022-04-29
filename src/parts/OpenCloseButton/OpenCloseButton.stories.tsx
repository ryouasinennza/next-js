import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { OpenCloseButton } from './OpenCloseButton'

type Story = ComponentStoryObj<typeof OpenCloseButton>

export default {
  args: {
    openCloseFlag: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    openCloseHandler: () => {},
  },
  component: OpenCloseButton,
  title: 'parts/OpenCloseButton',
} as ComponentMeta<typeof OpenCloseButton>

export const Default: Story = {}
