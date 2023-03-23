import { ComponentMeta, StoryFn } from '@storybook/react'
import styled from 'styled-components'
import { FlexLayout } from '../FlexLayout'
import { Typography } from '../Typography'
import { GridLayout } from './GridLayout'

export default {
  args: {},
  component: GridLayout,
  title: 'parts/GridLayout',
} as ComponentMeta<typeof GridLayout>

export const Default: StoryFn = () => {
  return (
    <>
      <Typography variant="caption1">repeat(auto-fill,minmax(192px,192px))</Typography>
      <GridLayout
        maxWidth="600px"
        minMax="192px,192px"
        repeatType="fill"
        spacing={8}
      >
        <Gray>item1</Gray>
        <Lightgray>item2</Lightgray>
        <Gray>item3</Gray>
        <Lightgray>item4</Lightgray>
        <Gray>item5</Gray>
      </GridLayout>
    </>
  )
}

const Lightgray = styled(FlexLayout)`
  background-color: lightgray;
`

const Gray = styled(FlexLayout)`
  background-color: gray;
`
