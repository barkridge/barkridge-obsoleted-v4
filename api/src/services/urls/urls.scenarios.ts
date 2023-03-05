import type { Prisma, Url } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UrlCreateArgs>({
  url: {
    one: { data: { id: 'String', url: 'String' } },
    two: { data: { id: 'String', url: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Url, 'url'>
