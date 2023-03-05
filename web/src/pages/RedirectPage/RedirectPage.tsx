import { MetaTags } from '@redwoodjs/web'

import UrlCell from 'src/components/UrlCell'

interface Props {
  id: string
}

const RedirectPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Redirect" description="Redirect page" />

      <div className="mx-auto max-w-sm p-4">
        <div className="overflow-hidden rounded-lg bg-gray-50">
          <div className="px-4 py-5 sm:p-6">
            <UrlCell id={id} />
          </div>
        </div>
      </div>
    </>
  )
}

export default RedirectPage
