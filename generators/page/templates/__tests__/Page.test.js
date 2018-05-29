// @flow
/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import <%= pageName %> from '../<%= pageName %>'

describe('<%= pageName %>', () => {
  let tree, props

  const buildTree = (newProps = {}) => {
    const defaultProps = {
    }

    props = Object.assign({}, defaultProps, newProps)

    return shallow(<<%= pageName %> {...props} />)
  }

  it('matches the snapshot', () => {
    tree = buildTree()
    expect(tree).toMatchSnapshot()
  })
})
