import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { FlexLayout } from '../FlexLayout'
import { Icons } from './Icons'
import { svgComponentsKeys } from './svgComponents'

type Story = ComponentStoryObj<typeof Icons>

export default {
  args: {},
  component: Icons,
  title: 'parts/Icons',
} as ComponentMeta<typeof Icons>

export const Default: Story = {
  render: () => {
    return (
      <FlexLayout
        direction="column"
        spacing={8}
      >
        {svgComponentsKeys.map((iconName) => {
          return (
            <Icons
              key={iconName}
              iconName={iconName}
              size={24}
            />
          )
        })}
      </FlexLayout>
    )
  },
}
