import { urls, url, createUrl } from './urls'
import type { StandardScenario } from './urls.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('urls', () => {
  scenario('returns all urls', async (scenario: StandardScenario) => {
    const result = await urls()

    expect(result.length).toEqual(Object.keys(scenario.url).length)
  })

  scenario('returns a single url', async (scenario: StandardScenario) => {
    const result = await url({ id: scenario.url.one.id })

    expect(result).toEqual(scenario.url.one)
  })

  scenario('creates a url', async () => {
    const result = await createUrl({
      input: { url: 'String' },
    })

    expect(result.id).toEqual('String')
    expect(result.url).toEqual('String')
  })
})
