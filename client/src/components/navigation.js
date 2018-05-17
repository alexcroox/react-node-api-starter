import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navigation = (props) => (
  <NavWrapper>
    <NavItem>
      <Link to="/">Home</Link>
    </NavItem>

    <NavItem>
      <Link to="/about">About</Link>
    </NavItem>
  </NavWrapper>
)

const NavWrapper = styled.ul`
  margin-left: 40px;
`

const NavItem = styled.li`
  display: inline-block;
  margin-right: 20px;

  & > a {
    color: red;
    text-decoration: none;
  }

  & > a:hover {
    opacity: 0.8;
  }
`

export default Navigation
