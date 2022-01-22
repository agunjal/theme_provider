import React from 'react'
import PropTypes from 'prop-types'

export const THEME_KEY = '__THEME__'

export default class ThemeProvider extends React.Component {
  state = {
    theme: 'white'
  }

  static childContextTypes = {
    [THEME_KEY]: {
      theme: PropTypes.string,
      handleChange: PropTypes.func
    }
  }

  getChildContext() {
    return {
      [THEME_KEY]: {
        theme: this.state.theme,
        handleChange: this.handleChange
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      theme: e.target.value,
      handleChange: this.handleChange
    })
  }

  render() {
    return this.props.children
  }
}
