import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Margin } from 'styled-components-spacing'
import Section from '../../components/section'
import Header from '../../components/header'
import Title from '../../components/title'
import Button from '../../components/button'

class About extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <Section>
          <Margin top={3} bottom={4}>
            <Title>Simple React/Redux/Router example</Title>
          </Margin>

          <Link to="/">
            <Button primary>Go home</Button>
          </Link>
        </Section>
      </Fragment>
    )
  }
}

export default About
