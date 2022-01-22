import React from 'react'
import { THEME_KEY } from './ThemeProvider'
import PropTypes from 'prop-types'

function Content(props, context) {
  const state = context[THEME_KEY]

  const strStyle = {
    background: `${state.theme}`,
    flex: '1 1 0%',
    padding: '40px',
    color: 'rgb(102, 102, 102)'
  }
  return (
    <div style={strStyle}>
      <p>Theme</p>
    </div>
  )
}

Content.contextTypes = {
  [THEME_KEY]: PropTypes.object
}

export default Content
