// @flow
import React from 'react'
import cx from 'classnames'

import styles from './<%= pageName %>.scss'

type <%= pageName %>Props = {
  className?: string,
}

function <%= pageName %> (props: <%= pageName %>Props) {
  const {
    className,
  } = props

  return (
    <div className={cx(styles.container, className)}>
      <%= pageName %>
    </div>
  )
}

export default <%= pageName %>
