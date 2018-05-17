import React from 'react'
import styled from 'styled-components'
import logo from '../static/logo.png'

const Logo = props => (
  <LogoStyled src={logo} alt="React starter" />
)

const LogoStyled = styled.img`
  display: block;
  height: 50px;
  max-width: 100%;
`

export default Logo



