import type { FindUrlQuery, FindUrlQueryVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindUrlQuery($id: String!) {
    url: url(id: $id) {
      id
      url
    }
  }
`

export const Loading = () => <div className="text-sm">Loading...</div>

export const Empty = () => (
  <ErrorSection error="Your requested URL is not found, please double-check!" />
)

export const Failure = ({ error }: CellFailureProps<FindUrlQueryVariables>) => (
  <ErrorSection error={`Error: ${error?.message}`} />
)

export const Success = ({
  url,
}: CellSuccessProps<FindUrlQuery, FindUrlQueryVariables>) => {
  window.location.href = url.url
  return <div className="text-sm">Redirecting...</div>
}

interface ErrorSectionProps {
  error: string
}

const ErrorSection = ({ error }: ErrorSectionProps) => {
  return (
    <div className="space-y-2">
      <div className="text-sm text-rose-500">{error}</div>

      <div className="text-xs">
        <Link to={routes.home()} className="flex items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  )
}
