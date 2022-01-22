import React from 'react'
import { render } from 'react-dom'
import './style.css'
import ThemeProvider from './ThemeProvider'
import ThemeSwitcher from './ThemeSwitcher'
import withTheme from './withTheme'
import Content from './Content'

const Theme1 = withTheme(ThemeSwitcher)
const Theme2 = withTheme(ThemeSwitcher)

const mainStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
}

const App = () => (
  <ThemeProvider>
    <main style={mainStyle}>
      <div className="header-section">
        <Theme1 themeColor="red" />
        <Theme2 themeColor="blue" />
      </div>
      <Content />
    </main>
  </ThemeProvider>
)

render(<App />, document.getElementById('root'))
