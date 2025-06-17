const typeDefs = `#graphql
  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }
`;

export default typeDefs;
