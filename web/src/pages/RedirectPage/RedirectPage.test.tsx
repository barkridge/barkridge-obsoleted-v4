import { render } from '@redwoodjs/testing/web'

import RedirectPage from './RedirectPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RedirectPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RedirectPage id="abcd0123" />)
    }).not.toThrow()
  })
})
