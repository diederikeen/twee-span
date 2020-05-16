const getTotalQuantity = (items) =>
  items.reduce((acc, item) => acc + item.node.quantity, 0);

export default getTotalQuantity;
