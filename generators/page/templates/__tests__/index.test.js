// @flow
/* eslint-env jest */
import <%= pageName %>Container from '../<%= pageName %>Container'

describe('<%= pageName %> exports', () => {
  it('exports <%= pageName %>Container by default', () => {
    expect(
      require('..').default
    ).toBe(
      <%= pageName %>Container
    )
  })
})
