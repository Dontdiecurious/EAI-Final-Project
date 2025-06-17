const orders = [
  { id: '1', productId: '1', quantity: 2 },
  { id: '2', productId: '2', quantity: 1 }
];

const resolvers = {
  Query: {
    orders: () => orders,
    order: (_, { id }) => orders.find(order => order.id === id),
  }
};

export default resolvers;
