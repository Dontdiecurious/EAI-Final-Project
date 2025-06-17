const products = [
  { id: '1', name: 'Keyboard', price: 500000 },
  { id: '2', name: 'Monitor', price: 1500000 }
];

const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find(product => product.id === id),
  }
};

export default resolvers;
