import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { screen, userEvent } from '@storybook/testing-library'
import { Input } from './Input'

type Story = ComponentStoryObj<typeof Input>

export default {
  args: {},
  component: Input,
  title: 'parts/Input',
} as ComponentMeta<typeof Input>

const typeText = 'example@example.com'
const typeDelay = 150

type GetChromaticDelay = (textLength: number, baseDelay: number) => number

const getChromaticDelay: GetChromaticDelay = (textLength, baseDelay) => {
  return textLength * baseDelay + 500
}

export const Default: Story = {}

export const PlayFunction: Story = {
  parameters: {
    chromatic: { delay: getChromaticDelay(typeText.length, typeDelay) },
  },
  play: async () => {
    const inputElement = screen.getByRole('textbox')
    await userEvent.type(inputElement, typeText, { delay: typeDelay })
  },
}
