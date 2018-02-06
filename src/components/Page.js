import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import fetchData from '../actions/fetch'
import PageWrapper from '../fragments/PageWrapper'
import TitleContainer from '../fragments/TitleContainer'
import ContentContainer from '../fragments/ContentContainer'


const Subject = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    flex-direction: row;
    align-items: flex-start;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  padding-top: 75%;
  background-image: url(${props => props.img});
  background-size: cover;
  flex-shrink: 0;
  position: relative;

  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    width: 40%;
    padding-top: 30%;
  }
`

const DateContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: ${({theme}) => theme.spacingSm};
  right: 0;
  height: ${({theme}) => theme.spacingSm};
  background: ${({theme}) => theme.colorPrimary};
  opacity: 0.8;
  color: #fff;
  text-align: center;
  padding-top: 5px;
`

const Lorem = styled.div`
  margin-top: ${({theme}) => theme.spacingSm};
  margin-left: 0;
  padding: ${({theme}) => theme.spacingSm};
  background: #fff;

  & > p {
    &:last-child {
      text-align: right;
      font-style: italic;
    }
  }

  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    margin-top: 0;
    margin-left: ${({theme}) => theme.spacingSm};
  }
`

const Comment = styled.div`
  margin-top: ${({theme}) => theme.spacingSm};
  margin-left: 0;
  padding: ${({theme}) => theme.spacingSm};
  background: #fff;

  & > p {
    &:last-child {
      text-align: right;
      font-style: italic;
    }
  }

  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    width: calc(50% - 0.5 * ${({ theme }) => theme.spacingSm});
    margin-top: 0;
    margin-left: ${({theme}) => theme.spacingSm};

    &:nth-of-type(2n) {
      margin-left: 0;
    }
  }
`


class Page extends React.PureComponent {

  componentWillMount() {
    if (!this.props.pageItem) {
      this.props.fetchData()
    }
  }

  renderComments(item, index) {
    return (
      <Comment key={index} comment>
        <p> {item.body} </p>
        <p> - {item.author} </p>
      </Comment>
    )
  }

  render() {
    const { pageItem } = this.props
    if (!pageItem) return null
    const options = { day: 'numeric', month: 'long', year: 'numeric' }
    const date = new Date(pageItem.post_date.slice(0, 10))
    const dateNL = date.toLocaleDateString('nl-NL', options)

    return (
      <PageWrapper>
        <TitleContainer>
          <h1>{pageItem.title}</h1>
        </TitleContainer>
        <ContentContainer>
          <Subject>
            <ImageContainer img={pageItem.background}>
              <DateContainer>{ dateNL }</DateContainer>
            </ImageContainer>
            <Lorem>
              <p> { pageItem.body } </p>
              <p> - { pageItem.author.name }, { pageItem.author.profession }. </p>
            </Lorem>
          </Subject>
          <h2>{pageItem.comments.length} {pageItem.comments.length === 1 ? ` reactie` : ` reacties`}</h2>
          { pageItem.comments.map(this.renderComments) }
        </ContentContainer>
      </PageWrapper>
    )
  }
}

const mapStateToProps = ({ data }, { match }) => {
  const pageItem = data && data.filter((item) => item._id === match.params.id)[0]
  return { pageItem }
}

export default connect(mapStateToProps, { fetchData })(Page)
