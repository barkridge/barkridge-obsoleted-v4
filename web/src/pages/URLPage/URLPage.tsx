import { useState } from 'react'

import { CreateUrlMutation, CreateUrlMutationVariables } from 'types/graphql'

import {
  FieldValues,
  Form,
  Label,
  Submit,
  SubmitHandler,
  TextField,
  useForm,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import StandardLayout from 'src/layouts/StandardLayout/StandardLayout'

const CREATE_URL = gql`
  mutation CreateUrlMutation($input: CreateUrlInput!) {
    createUrl(input: $input) {
      id
      url
    }
  }
`

interface Result {
  id: string
  url: string
}

const UrlPage = () => {
  const [results, setResults] = useState<Result[]>([])

  const onCreated = (result: Result) => {
    setResults((prevState) => [result, ...prevState])
  }

  return (
    <StandardLayout title="URL Shortener">
      <MetaTags title="Url" description="Url page" />

      <Toaster />

      <div className="mt-8">
        <FormSection onCreated={onCreated} />
      </div>

      <div className="mt-8 space-y-8">
        <ResultsSection results={results} />
      </div>
    </StandardLayout>
  )
}

export default UrlPage

interface FormValues {
  url: string
}

interface FormSectionProps {
  onCreated: (Result) => void
}

const FormSection = ({ onCreated }: FormSectionProps) => {
  const formMethods = useForm<FieldValues>()

  const [create, { loading }] = useMutation<
    CreateUrlMutation,
    CreateUrlMutationVariables
  >(CREATE_URL, {
    onCompleted: ({ createUrl: { id, url } }) => {
      onCreated({ id, url })
      formMethods.reset()

      toast.success('Completed!')
    },
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <div className="overflow-hidden rounded-lg bg-gray-50">
      <div className="px-4 py-5 sm:p-6">
        <Form onSubmit={onSubmit} formMethods={formMethods}>
          <div className="space-y-4 divide-y divide-transparent">
            <div>
              <Label
                name="url"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                URL
              </Label>

              <TextField
                name="url"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>

            <div className="flex justify-end">
              <Submit
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:w-auto"
                disabled={loading}
              >
                Submit
              </Submit>
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

interface ResultsSectionProps {
  results: Result[]
}

const ResultsSection = ({ results }: ResultsSectionProps) => {
  const origin = location.origin

  const absoluteString = (id: string) => {
    return (
      <a
        href={`${origin}/${id}`}
        className="text-sky-500"
        target="_blank"
        rel="noreferrer"
      >{`${origin}/${id}`}</a>
    )
  }

  return (
    <>
      {results.map((result) => (
        <div key={result.id} className="overflow-hidden rounded-lg bg-gray-50">
          <div className="px-4 py-5 sm:p-6">
            <div className="text-sm">{absoluteString(result.id)}</div>
            <div className="text-xs text-gray-300">{result.url}</div>
          </div>
        </div>
      ))}
    </>
  )
}
