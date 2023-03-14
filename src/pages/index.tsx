import NextImage from 'next/image'
import NextLink from 'next/link'
import useWindowSize from 'react-use/lib/useWindowSize'
import styled from 'styled-components'
import { Button } from '../parts/Button'
import { FlexBox } from '../parts/FlexBox'
import { GridBox } from '../parts/GridBox'
import { Typography } from '../parts/Typography'
import { CustomNextPage } from '../types/CustomNextTypes'

const Home: CustomNextPage = () => {
  const { width } = useWindowSize()
  return (
    <FlexBox>
      <FullWidthImage aspectRatio={56.1718}>
        <div>
          <NextImage
            fill
            alt="Sample"
            src="/main.jpg"
          />
        </div>
        <Heading>
          <GridBox
            alignItems="center"
            justifyContent="center"
            margin={[16, 'auto']}
            maxWidth="90%"
            minMax="110px,1fr"
            repeatType="fit"
            spacing={16}
          >
            <NextLink href="/">
              <Button>HOME</Button>
            </NextLink>
            <NextLink href="/">
              <Button>ABOUT</Button>
            </NextLink>
            <NextLink href="/">
              <Button>CAMP SITES</Button>
            </NextLink>
            <NextLink href="/">
              <Button>F.A.Q</Button>
            </NextLink>
          </GridBox>
          <FlexBox
            alignItems="center"
            direction="row"
            justifyContent="center"
            margin={[32, 0, 0, 0]}
          >
            <Typography
              color="secondary"
              elementType="h1"
              variant={width > 400 ? 'h2' : 'h4'}
            >
              YAMANOUE CAMP
            </Typography>
          </FlexBox>
        </Heading>
      </FullWidthImage>
      <FlexBox padding={16}>
        <Typography
          elementType="h2"
          margin={[24, 0]}
          variant="h3"
        >
          CONTENTS
        </Typography>
        <GridBox
          minMax="220px,1fr"
          repeatType="fit"
          spacing={16}
        >
          <FlexBox alignItems="center">
            <FullWidthImage aspectRatio={66.6015}>
              <NextImage
                fill
                alt="Sample"
                src="/activity.jpg"
              />
            </FullWidthImage>
            <Typography variant="body1">Mountain bike</Typography>
          </FlexBox>
          <FlexBox alignItems="center">
            <FullWidthImage aspectRatio={66.6015}>
              <NextImage
                fill
                alt="Sample"
                src="/activity.jpg"
              />
            </FullWidthImage>
            <Typography variant="body1">Mountain bike</Typography>
          </FlexBox>
          <FlexBox alignItems="center">
            <FullWidthImage aspectRatio={66.6015}>
              <NextImage
                fill
                alt="Sample"
                src="/activity.jpg"
              />
            </FullWidthImage>
            <Typography variant="body1">Mountain bike</Typography>
          </FlexBox>
        </GridBox>
        <FlexBox
          alignItems="center"
          justifyContent="center"
          margin={[24, 0]}
        >
          <FlexBox
            alignItems="center"
            direction="row"
            justifyContent="center"
            spacing={32}
          >
            <NextLink href="/">
              <Typography variant="body1">FOLLOW US</Typography>
            </NextLink>
            <NextLink href="/">
              <Typography variant="body1">CONTACT US</Typography>
            </NextLink>
          </FlexBox>
          <Typography
            margin={16}
            variant="overline1"
          >
            ©2023 by YAMANOUE CAMP.
          </Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  )
}

export default Home

type FullWidthImageProps = {
  aspectRatio: number
}

const FullWidthImage = styled('div')<FullWidthImageProps>`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: ${({ aspectRatio }) => aspectRatio}%;

  > div {
    position: absolute;
    inset: 0;
    z-index: 100;
  }
`

const Heading = styled('div')`
  position: absolute;
  inset: 0;
  z-index: 200;
`
