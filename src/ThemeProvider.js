import React from 'react'
import PropTypes from 'prop-types'

export const THEME_KEY = '__THEME__'

export default class ThemeProvider extends React.Component {
  state = {
    theme: 'black'
  }

  static childContextTypes = {
    [THEME_KEY]: {
      theme: PropTypes.string.isRequired,
      handler: PropTypes.func
    }
  }

  getChildContext() {
    return {
      [THEME_KEY]: {
        theme: this.theme,
        handler: this.handleChange
      }
    }
  }

  handleChange = (theme) => {
    console.log(theme)
  }

  render() {
    return this.props.children
  }
}
