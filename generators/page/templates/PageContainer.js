// @flow
import React from 'react'

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

export default <%= pageName %>Container
