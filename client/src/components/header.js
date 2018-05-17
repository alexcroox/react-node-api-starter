import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from './logo'
import Navigation from './navigation'

const Header = (props) => (
  <HeaderStyled>
    <Link to="/">
      <Logo />
    </Link>

    <Navigation />
  </HeaderStyled>
)

const HeaderStyled = styled.div`
  border-bottom: 1px solid #CCC;
  padding: 10px 15px;
  display: flex;
  align-items: center;
`

export default Header
