import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { validate } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const urls: QueryResolvers['urls'] = () => {
  return db.url.findMany()
}

export const url: QueryResolvers['url'] = ({ id }) => {
  return db.url.findUnique({
    where: { id },
  })
}

export const createUrl: MutationResolvers['createUrl'] = ({ input }) => {
  validate(input.url, 'URL', {
    presence: true,
    length: { min: 8 },
  })

  return db.url.create({
    data: {
      id: randomString(8),
      url: input.url,
    },
  })
}

const randomString = (length = 8): string => {
  // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const characters = 'abcdef0123456789'
  const charactersLength = characters.length

  let counter = 0
  let result = ''

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }

  return result
}
