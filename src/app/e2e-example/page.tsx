import { Flex } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { Form } from './Form'

const Page = async (): Promise<ReactElement> => {
  return (
    <Flex
      direction="column"
      padding={24}
    >
      <Form />
    </Flex>
  )
}

export default Page
