import { Flex } from '@chakra-ui/react'
import { Meta, StoryObj } from '@storybook/react'
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
      <Flex
        direction="column"
        gridGap={4}
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
      </Flex>
    )
  },
}
