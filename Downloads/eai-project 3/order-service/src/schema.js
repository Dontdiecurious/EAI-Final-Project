import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Order {
    id: ID!
    userId: ID!
    productId: ID!
    quantity: Int!
  }

  type Query {
    orders: [Order!]!
  }

  type Mutation {
    createOrder(userId: ID!, productId: ID!, quantity: Int!): Order!
  }
`;
