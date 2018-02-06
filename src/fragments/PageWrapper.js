import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({theme}) => theme.colorBackground};
  width: 100vw;
  max-width: 1800px;
  margin: auto;
`

function PageWrapper(props) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default PageWrapper
