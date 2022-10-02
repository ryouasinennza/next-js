import { FC, SyntheticEvent, useState } from 'react'
import styled from 'styled-components'

type OnChange = (event: SyntheticEvent<HTMLInputElement>) => void

export const Input: FC = () => {
  const [state, setState] = useState('')

  const onChange: OnChange = (event) => {
    setState(event.currentTarget.value)
  }

  return <InputComponent type="text" name="example" value={state} onChange={onChange} />
}

const InputComponent = styled('input')`
  display: block;
  width: 100%;
  padding: 4px 8px;
  border: 1px solid;
  border-radius: 4px;
`
