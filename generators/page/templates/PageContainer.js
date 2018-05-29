// @flow
import React from 'react'
import cx from 'classnames'

import styles from './<%= pageName %>.scss'
import <%= pageName %> from './<%= pageName %>'

type <%= pageName %>ContainerProps = {
  className?: string,
}

class <%= pageName %>Container extends React.Component<<%= pageName %>ContainerProps> {
  render () {
    return (
      <<%= pageName %> {...this.props} />
    )
  }
}

default export <%= pageName %>Container
