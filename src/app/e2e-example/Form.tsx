'use client'
import { Button, Flex, Input, Text } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

type Inputs = {
  example: string
  exampleRequired: string
}

export const Form: FC = () => {
  const [state, setState] = useState<Inputs>({
    example: '',
    exampleRequired: '',
  })
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<Inputs>()
  const onSubmit = (data: Inputs): void => {
    setState(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        direction="column"
        gap={4}
      >
        <Input
          defaultValue=""
          {...register('example')}
        />
        <Input {...register('exampleRequired', { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <Button type="submit">送信</Button>
        <Text>result1:{state.example}</Text>
        <Text>result2:{state.exampleRequired}</Text>
      </Flex>
    </form>
  )
}
