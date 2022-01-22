import React from 'react'
import PropTypes from 'prop-types'
import getDisplayName from 'react-display-name'
import hoistStatics from 'hoist-non-react-statics'

import { THEME_KEY } from './ThemeProvider'

export default function withTheme(WrappedComponent) {
  class ThemeWrapper extends React.Component {
    static contextTypes = {
      [THEME_KEY]: {
        theme: PropTypes.string,
        handleChange: PropTypes.func
      }
    }

    render() {
      return <WrappedComponent {...this.props} {...this.context[THEME_KEY]} />
    }
  }
  hoistStatics(withTheme, WrappedComponent)
  ;`ThemeWrapper(${getDisplayName(WrappedComponent)})`
  return ThemeWrapper
}
