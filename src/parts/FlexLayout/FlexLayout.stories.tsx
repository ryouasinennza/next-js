import { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'
import styled from 'styled-components'
import { GridLayout } from '../GridLayout'
import { Typography } from '../Typography'
import { FlexLayout } from './FlexLayout'

type Story = StoryObj<typeof FlexLayout>

const ChildrenComponent: FC = () => {
  return (
    <>
      <div>example</div>
      <div>example</div>
      <div>example</div>
      <div>example</div>
      <div>example</div>
    </>
  )
}

const meta: Meta<typeof FlexLayout> = {
  args: {
    alignItems: undefined,
    children: <ChildrenComponent />,
    className: undefined,
    direction: undefined,
    elementType: undefined,
    height: undefined,
    justifyContent: undefined,
    margin: undefined,
    maxWidth: undefined,
    minHeight: undefined,
    padding: undefined,
    spacing: undefined,
    style: undefined,
    width: undefined,
    wrap: undefined,
  },
  component: FlexLayout,
  title: 'parts/FlexLayout',
}

export default meta

export const DefaultStory: Story = {}

export const Column: Story = {
  args: {
    direction: 'column',
  },
}

export const FlexGrow: Story = {
  render: () => {
    return (
      <FlexLayout>
        <Gray flex="1 0 auto">余白を埋めている</Gray>
        <Lightgray>item2</Lightgray>
        <Gray>item2</Gray>
        <Lightgray>item2</Lightgray>
        <Gray>item2</Gray>
      </FlexLayout>
    )
  },
}

export const FlexShrink: Story = {
  render: () => {
    return (
      <>
        <Typography variant="caption1">子要素が100%でshrinkを0にするとはみ出る</Typography>
        <FlexLayout maxWidth="300px">
          <Gray
            width
            flex="0 0 auto"
          >
            縮まない
          </Gray>
          <Lightgray
            width
            flex="0 0 auto"
          >
            縮まない
          </Lightgray>
        </FlexLayout>
        <Typography variant="caption1">縮みの負担率 1:1</Typography>
        <FlexLayout maxWidth="300px">
          <Gray
            width
            flex="0 1 auto"
          >
            150px縮んでる
          </Gray>
          <Lightgray
            width
            flex="0 1 auto"
          >
            150px縮んでる
          </Lightgray>
        </FlexLayout>
        <Typography variant="caption1">縮みの負担率 1:2</Typography>
        <FlexLayout maxWidth="300px">
          <Gray
            width
            flex="0 1 auto"
          >
            100px縮んでる
          </Gray>
          <Lightgray
            width
            flex="0 2 auto"
          >
            200px縮んでる
          </Lightgray>
        </FlexLayout>
      </>
    )
  },
}

export const FlexBasis: Story = {
  render: () => {
    return (
      <FlexLayout
        direction="column"
        maxWidth="600px"
      >
        <Typography variant="caption1">他に何も設定しないでautoを使うと最小になる</Typography>
        <FlexLayout>
          <Gray flex="0 0 auto">最小になる</Gray>
          <Lightgray flex="0 0 auto">最小になる＋＋</Lightgray>
          <Gray flex="0 0 auto">最小になる＿＿＿</Gray>
        </FlexLayout>
        <Typography variant="caption1">widthみたいに使える</Typography>
        <FlexLayout>
          <Gray flex="0 0 20%">flex-basis: 20%</Gray>
          <Lightgray flex="0 0 30%">flex-basis: 30%</Lightgray>
          <Gray flex="0 0 50%">flex-basis: 50%</Gray>
        </FlexLayout>
        <Typography variant="caption1">widthで書く</Typography>
        <FlexLayout>
          <Gray width="20%">width: 20%</Gray>
          <Lightgray width="30%">width: 30%</Lightgray>
          <Gray width="50%">width: 50%</Gray>
        </FlexLayout>
        <Typography variant="caption1">basisの場合はみ出る(min-widthみたい)</Typography>
        <FlexLayout>
          <Gray flex="0 0 20%">flex-basis: 20%</Gray>
          <Lightgray flex="0 0 30%">flex-basis: 30%</Lightgray>
          <Gray flex="0 0 60%">flex-basis: 60%</Gray>
        </FlexLayout>
        <Typography variant="caption1">widthだとはみ出ない</Typography>
        <FlexLayout>
          <Gray width="20%">width: 20%</Gray>
          <Lightgray width="30%">width: 30%</Lightgray>
          <Gray width="60%">width: 60%</Gray>
        </FlexLayout>
      </FlexLayout>
    )
  },
}

export const Other: Story = {
  render: () => {
    return (
      <>
        <Typography variant="caption1">均等配置</Typography>
        <FlexLayout
          maxWidth="600px"
          spacing={8}
          wrap="wrap"
        >
          <Gray flex="0 0 192px">item1</Gray>
          <Lightgray flex="0 0 192px">item2</Lightgray>
          <Gray flex="0 0 192px">item3</Gray>
          <Lightgray flex="0 0 192px">item4</Lightgray>
          <Gray flex="0 0 192px">item5</Gray>
        </FlexLayout>
        <Typography variant="caption1">こういうレイアウトの場合gridの方が親要素だけで済むので簡単</Typography>
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
  },
}

const Lightgray = styled(FlexLayout)`
  background-color: lightgray;
`

const Gray = styled(FlexLayout)`
  background-color: gray;
`
