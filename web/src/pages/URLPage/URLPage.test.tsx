import { render } from '@redwoodjs/testing/web'

import UrlPage from './UrlPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UrlPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UrlPage />)
    }).not.toThrow()
  })
})
