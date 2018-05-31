// @flow
import React from 'react'
import cx from 'classnames'

import styles from './<%= componentName %>.scss'

type <%= componentName %>Props = {
  className?: string,
}

function <%= componentName %> (props: <%= componentName %>Props) {
  const {
    className,
  } = props

  return (
    <div className={cx(styles.container, className)}>
      <%= componentName %>
    </div>
  )
}

export default <%= componentName %>
