import React from 'react'
import styled, { css } from 'styled-components'
import { Field } from 'formik'

const Input = styled(Field)`
  padding: 4px 10px;
  border: 1px solid #CCC;

  ${props => (props.error) && css`
    border-color: red;
  `}
`

export default Input
