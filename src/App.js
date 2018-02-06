import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles'
import Routes from './routes'
import './styles/typography'
import './styles/reset'

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme} >
        <div>
          <Routes />
        </div>
      </ThemeProvider>
    )
  }
}

export default App
