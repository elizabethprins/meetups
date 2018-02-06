import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  padding: ${({theme}) => theme.spacingSm};

  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    padding: ${({theme}) => theme.spacingSm} ${({theme}) => theme.spacingMd};
  }

  @media (min-width: ${({ theme }) => theme.bpDesktop}) {
    padding: ${({theme}) => theme.spacingSm} ${({theme}) => theme.spacingXl};
  }
`

function ContentContainer(props) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default ContentContainer
