import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import styled from 'styled-components'
import { Counter } from './Counter'
import { useCounter } from './hooks'

type Story = ComponentStoryObj<typeof Counter>

export default {
  args: {
    name: 'example',
  },
  component: Counter,
  title: 'parts/Counter',
} as ComponentMeta<typeof Counter>

const Component: typeof Counter = ({ name }) => {
  const { count, upCountHandler, downCountHandler } = useCounter()
  return (
    <Wrap>
      <Counter name={name} count={count} upCountHandler={upCountHandler} downCountHandler={downCountHandler} />
    </Wrap>
  )
}

export const Default: Story = {
  render: (args) => <Component {...args} />,
}

const Wrap = styled('div')`
  margin: 8px;
`
