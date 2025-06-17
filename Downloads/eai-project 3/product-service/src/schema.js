import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Int!
  }

  type Query {
    products: [Product!]!
  }

  type Mutation {
    createProduct(name: String!, price: Int!): Product!
  }
`;
