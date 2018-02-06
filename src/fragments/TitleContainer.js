import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  padding-left: ${({theme}) => theme.spacingSm};
  flex-direction: column;
  background-image: url('/cateleria-cordoba.png');
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center;

  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    padding-left: ${({theme}) => theme.spacingMd};
  }

  @media (min-width: ${({ theme }) => theme.bpDesktop}) {
    height: 30vh;
    padding-left: ${({theme}) => theme.spacingXl};
  }
`

function TitleContainer(props) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default TitleContainer
