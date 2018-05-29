// @flow
/* eslint-env jest */
import <%= componentName %> from '..'

describe('<%= componentName %> exports', () => {
  it('exports <%= componentName %> by default', () => {
    expect(
      require('..').default
    ).toBe(
      <%= componentName %>
    )
  })
})
