import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import styled from 'styled-components'
import ItemWrapper from '../fragments/ItemWrapper'
import Marker from '../fragments/icons/marker'
import Calendar from '../fragments/icons/calendar'


const MeetupContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
`

const Poster = styled.div`
  width: 70%;
  height: 75%;
  background: ${({theme}) => theme.colorPrimary};
  margin-left: ${({theme}) => theme.spacingSm};
  padding: ${({theme}) => theme.spacingXs};
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: ${({theme}) => theme.fontMedium};
`

const Title = styled.div`
  height: 27px;
  align-self: flex-start;
  border-bottom: 3px solid #fff;
  display: flex;
  padding: 0 3px 0 3px;
`

const MarkerContainer = styled.div`
  height: 16px;
  width: 16px;
  margin: 0px 3px 0px 12px;
`

const DateContainer = styled.div`
  margin-top: ${({theme}) => theme.spacingXs};
  display: flex;
  align-items: center;
  font-size: 12px;

  & > div {
    margin-right: 8px;

    & > svg {
      width: 18px;
      height: 18px;
    }
  }
`

const SubjectContainer = styled.div`
  margin-top: ${({theme}) => theme.spacingXs};
`


class Meetup extends React.PureComponent {
  constructor() {
    super()
    this.goToMeetup = this.goToMeetup.bind(this)
  }

  goToMeetup() {
    this.props.push(`/${this.props._id}`)
  }

  render() {
    const { background, body, post_date, title, type } = this.props
    const subject = body.slice(0, 30) + '.'
    const options = { day: 'numeric', month: 'long', year: 'numeric' }
    const date = new Date(post_date.slice(0, 10))
    const dateNL = date.toLocaleDateString('nl-NL', options)

    return (
      <ItemWrapper>
        <MeetupContainer
          img={background}
          onClick={this.goToMeetup}
          >
          <Poster>
            <Title>
              {type}
              <MarkerContainer>
                <Marker />
              </MarkerContainer>
              {title}
            </Title>
            <DateContainer>
              <div>
                <Calendar />
              </div>
              {dateNL}
            </DateContainer>
            <SubjectContainer>
              {subject}
            </SubjectContainer>
          </Poster>
        </MeetupContainer>
      </ItemWrapper>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { push })(Meetup)
