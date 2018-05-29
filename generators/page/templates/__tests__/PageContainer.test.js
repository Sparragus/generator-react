// @flow
/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import <%= pageName %>Container from '../<%= pageName %>Container'

describe('<%= pageName %>Container', () => {
  let tree, props

  const buildTree = (newProps = {}) => {
    const defaultProps = {
    }

    props = Object.assign({}, defaultProps, newProps)

    return shallow(<<%= pageName %>Container {...props} />)
  }

  it('#render', () => {
    it('matches the snapshot', () => {
      tree = buildTree()
      expect(tree).toMatchSnapshot()
    })
  })
})
