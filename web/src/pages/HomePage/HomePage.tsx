import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import StandardLayout from 'src/layouts/StandardLayout/StandardLayout'

const HomePage = () => {
  return (
    <StandardLayout>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </StandardLayout>
  )
}

export default HomePage
