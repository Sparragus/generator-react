// @flow
import React from 'react';

import <%= componentName %> from './<%= componentName %>';

type <%= componentName %>ContainerProps = {
  className?: string,
};

class <%= componentName %>Container extends React.Component<<%= componentName %>ContainerProps> {
  render () {
    return (
      <<%= componentName %> {...this.props} />
    );
  }
};

export default <%= componentName %>Container;
