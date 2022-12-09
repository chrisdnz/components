import { InputUnstyled } from '@mui/base'
import styled from 'styled-components'
import DEFAULT_STYLE from './defaultInputStyle'

export const Input = ({ ...props }) => <InputUnstyled slots={{ input: StyledInput }} {...props} />

const StyledInput = styled('input')(DEFAULT_STYLE)
