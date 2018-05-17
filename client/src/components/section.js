import styled, { css } from 'styled-components'

const Section = styled.div`
  padding-left: 24px;
  padding-right: 24px;

  ${props => (props.narrow) && css`
    padding-left: 16px;
    padding-right: 16px;
  `}
`

export default Section
