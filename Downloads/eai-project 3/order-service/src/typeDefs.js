const typeDefs = `#graphql
  type Order {
    id: ID!
    productId: ID!
    quantity: Int!
  }

  type Query {
    orders: [Order!]!
    order(id: ID!): Order
  }
`;

export default typeDefs;
