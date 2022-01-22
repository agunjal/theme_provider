import React from 'react'
import { THEME_KEY } from './ThemeProvider'
import PropTypes from 'prop-types'

const ThemeSwitcher = (props, context) => {
  return (
    <div>
      <button
        onClick={context[THEME_KEY].handleChange}
        name="Theme"
        value={props.themeColor}
      >
        {props.themeColor}
      </button>
    </div>
  )
}

ThemeSwitcher.contextTypes = {
  [THEME_KEY]: {
    theme: PropTypes.string,
    handleChange: PropTypes.func
  }
}

export default ThemeSwitcher
