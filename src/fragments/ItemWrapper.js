import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 200px;
  background: #fff;
  border: 1px solid ${({theme}) => theme.colorGrey};
  margin-bottom: ${({theme}) => theme.spacingSm};
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.2s ease-out;

  &:hover {
    opacity: 1;
  }

  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    margin-right: ${({theme}) => theme.spacingSm};
    width: calc(50% - 1/2 * ${({theme}) => theme.spacingSm});

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.bpDesktop}) {
    height: 220px;
    width: calc(33.3% - 2/3 * ${({theme}) => theme.spacingSm});

    &:nth-child(2n) {
      margin-right: ${({theme}) => theme.spacingSm};
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`

function ItemWrapper(props) {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default ItemWrapper
