import React from 'react'
import { THEME_KEY } from './ThemeProvider'
import PropTypes from 'prop-types'

const ThemeSwitcher = (props, context) => {
  return (
    <div>
      <button name="Theme" value="red">
        Change Theme
      </button>
    </div>
  )
}

ThemeSwitcher.contextTypes = {
  [THEME_KEY]: PropTypes.object
}

export default ThemeSwitcher
