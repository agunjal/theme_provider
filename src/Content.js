import React from 'react'
import { THEME_KEY } from './ThemeProvider'
import PropTypes from 'prop-types'

function Content(props, context) {
  const state = context[THEME_KEY]

  const strStyle = {
    backgroundColor: `${state.theme}`,
    width: '100%',
    height: '100%'
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
