const getTotalCartPrice = (items) => {
  const total = items.length
    ? items.reduce(
        (acc, { node }) =>
          acc + parseFloat(node.variant.priceV2.amount * node.quantity),
        0
      )
    : 0;

  const formatter = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });

  return formatter.format(total);
};

export default getTotalCartPrice;
