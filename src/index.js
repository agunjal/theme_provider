import React from 'react'
import { render } from 'react-dom'
import './style.css'
import ThemeProvider from './ThemeProvider'
import ThemeSwitcher from './ThemeSwitcher'
import withTheme from './withTheme'
import Content from './Content'

const Theme1 = withTheme(ThemeSwitcher)

const App = () => (
  <ThemeProvider>
    <Content />
    <Theme1 />
  </ThemeProvider>
)

render(<App />, document.getElementById('root'))
