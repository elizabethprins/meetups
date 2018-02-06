import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import styled from 'styled-components'
import ItemWrapper from '../fragments/ItemWrapper'
import Like from '../fragments/icons/like'
import Comments from '../fragments/icons/comment'

const ConvoContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({theme}) => theme.spacingXs};
  position: relative;
`

const AuthorContainer = styled.div`
  padding: 6px;
  display: flex;
  align-items: center;
`

const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-image: url(${props => props.img});
  background-size: cover;
`

const Details = styled.div`
  margin-left: ${({theme}) => theme.spacingXs};
  padding-top: 3px;

  & h3 {
   margin: 0;
  }

  & span {
    font-size: 12px;
  }
`

const Quote = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colorPrimary};
  padding: ${({theme}) => theme.spacingXs};
  margin-top: ${({theme}) => theme.spacingXxs};
  color: #fff;
  font-family: ${({theme}) => theme.fontMedium};
  border-radius: 5px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    background: ${({theme}) => theme.colorPrimary};
    top: -10px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    border-radius: 2px;
  }
`

const Bottom = styled.div`
  position: absolute;
  bottom: 7px;
  display: flex;
`

const ExtrasContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 14px;

  &:last-of-type {
    margin-right: ${({theme}) => theme.spacingXs};
  }

  & > div {
    height: 16px;
    width: 16px;
    margin-right: 3px;

    & > svg {
      max-height: 12px;
    }
  }

  & > span {
    font-size: 10px;

    &:nth-of-type(2) {
      display: none;
    }
  }

  @media (min-width: ${({ theme }) => theme.bpTablet}) {
    & > span {
      margin-right: 3px;

      &:nth-of-type(2) {
        display: flex;
      }
    }
  }
`



class Conversation extends React.PureComponent {
  constructor() {
    super()
    this.goToConversation = this.goToConversation.bind(this)
  }

  goToConversation() {
    this.props.push(`/${this.props._id}`)
  }

  render() {
    const { author, body, comments, likes, post_date } = this.props
    const quote = body.slice(0, 80) + '...'
    const options = { day: 'numeric', month: 'long', year: 'numeric' }
    const date = new Date(post_date.slice(0, 10))
    const dateNL = date.toLocaleDateString('nl-NL', options)


    return (
      <ItemWrapper>
        <ConvoContainer onClick={this.goToConversation}>
          <AuthorContainer>
            <Avatar img={author.avatar} />
            <Details>
              <h3>{author.name}</h3>
              <span>{author.profession}</span>
            </Details>
          </AuthorContainer>
          <Quote>{quote}</Quote>
          <Bottom>
            <ExtrasContainer>
              <span>{dateNL}</span>
            </ExtrasContainer>
            <ExtrasContainer>
              <div>
                <Like />
              </div>
              <span>{likes}</span>
              <span>{likes === 1 ? ` waardering` : ` waarderingen`}</span>
            </ExtrasContainer>
            <ExtrasContainer>
              <div>
                <Comments />
              </div>
              <span>{comments.length}</span>
              <span>{comments.length === 1 ? ` reactie` : ` reacties`}</span>
            </ExtrasContainer>
          </Bottom>
        </ConvoContainer>
      </ItemWrapper>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { push })(Conversation)
