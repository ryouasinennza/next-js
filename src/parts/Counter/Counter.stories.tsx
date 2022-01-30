import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Counter } from './Counter'

type Story = ComponentStoryObj<typeof Counter>

export default { component: Counter } as ComponentMeta<typeof Counter>

export const Default: Story = {}
