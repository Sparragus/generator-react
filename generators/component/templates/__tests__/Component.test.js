// @flow
/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import <%= componentName %> from '../<%= componentName %>'

describe('<%= componentName %>', () => {
  let tree, props

  const buildTree = (newProps = {}) => {
    const defaultProps = {
    }

    props = Object.assign({}, defaultProps, newProps)

    return shallow(<<%= componentName %> {...props} />)
  }

  it('matches the snapshot', () => {
    tree = buildTree()
    expect(tree).toMatchSnapshot()
  })
})
