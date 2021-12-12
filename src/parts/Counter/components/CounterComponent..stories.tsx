import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CounterComponent } from './CounterComponent'

export default {
  argTypes: {
    count: { control: 'number' },
    downCountHandler: { action: 'onClick', control: null },
    name: { control: 'text' },
    upCountHandler: { action: 'onClick', control: null },
  },
  component: CounterComponent,
  title: 'CounterComponent',
} as ComponentMeta<typeof CounterComponent>

const Template: ComponentStory<typeof CounterComponent> = (arg) => {
  return <CounterComponent {...arg} />
}

export const Primary = Template.bind({})
Primary.args = { count: 1, name: 'Primary' }
