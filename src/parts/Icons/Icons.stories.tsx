import { Meta, StoryObj } from '@storybook/react'
import { FlexLayout } from '../FlexLayout'
import { Icons } from './Icons'
import { svgComponentsKeys } from './svgComponents'

type Story = StoryObj<typeof Icons>

const meta: Meta<typeof Icons> = {
  args: {},
  component: Icons,
  title: 'parts/Icons',
}

export default meta

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
