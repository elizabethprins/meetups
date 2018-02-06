import React from 'react'
import { connect } from 'react-redux'
import fetchData from '../actions/fetch'
import Meetup from './Meetup'
import Conversation from './Conversation'
import PageWrapper from '../fragments/PageWrapper'
import TitleContainer from '../fragments/TitleContainer'
import ContentContainer from '../fragments/ContentContainer'


class Main extends React.PureComponent {

  componentWillMount() {
    this.props.fetchData()
  }

  renderMeetups(item, index) {
    if (item.type === "meetup") {
      return (
        <Meetup
          key={index} {...item}
          index={index}
          onclick={(e) => { this.goToItemPage(index) }}
          />
      )
    } else {
      return (
        <Conversation
          key={index} {...item}
          index={index}
          />
      )
    }
  }

  render() {
    const { data } = this.props
    if (!data) return null

    return (
      <PageWrapper>
        <TitleContainer>
          <h1>meetups</h1>
        </TitleContainer>
        <ContentContainer>
          { data.map(this.renderMeetups) }
        </ContentContainer>
      </PageWrapper>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { fetchData })(Main)
