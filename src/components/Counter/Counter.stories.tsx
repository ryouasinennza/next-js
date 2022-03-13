import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import styled from 'styled-components'
import { Counter } from './Counter'

type Story = ComponentStoryObj<typeof Counter>

export default {
  args: {
    name: 'example',
  },
  component: Counter,
  title: 'parts/Counter',
} as ComponentMeta<typeof Counter>

export const Default: Story = {}

export const Primary: Story = {
  args: {
    name: 'Primary',
  },
}

export const Secondary: Story = {
  render: () => {
    return (
      <Wrap>
        <Counter name="Secondary" />
      </Wrap>
    )
  },
}

const Wrap = styled('div')`
  margin: 8px;
`
