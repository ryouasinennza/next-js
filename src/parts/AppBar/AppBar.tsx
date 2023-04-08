import { FC } from 'react'
import { FlexLayout } from '../FlexLayout'
import { Typography } from '../Typography'

export const AppBar: FC = () => {
  return (
    <FlexLayout
      alignItems="center"
      backgroundColor="appBar"
      justifyContent="space-between"
      padding={[24, 24]}
    >
      <FlexLayout>LOGO</FlexLayout>
      <FlexLayout spacing={16}>
        <Typography
          color="secondary"
          variant="body1"
        >
          SERVICE
        </Typography>
        <Typography
          color="secondary"
          variant="body1"
        >
          BLOG
        </Typography>
        <Typography
          color="secondary"
          variant="body1"
        >
          NEWS
        </Typography>
        <Typography
          color="secondary"
          variant="body1"
        >
          CONTACT
        </Typography>
        <Typography
          color="secondary"
          variant="body1"
        >
          SHOP
        </Typography>
      </FlexLayout>
    </FlexLayout>
  )
}
