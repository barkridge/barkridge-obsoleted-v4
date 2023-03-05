export const schema = gql`
  type Url {
    id: String!
    url: String!
    createdAt: DateTime!
    createdBy: BigInt
  }

  type Query {
    urls: [Url!]! @requireAuth
    url(id: String!): Url @skipAuth
  }

  input CreateUrlInput {
    url: String!
    # createdBy: BigInt
  }

  type Mutation {
    createUrl(input: CreateUrlInput!): Url! @skipAuth
  }
`
