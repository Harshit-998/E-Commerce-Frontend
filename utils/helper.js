export const getDiscountedPricePercentage = (
  orignal_price,
  discountedPrice
) => {
  const discount = orignal_price - discountedPrice;

  const discountPercentage = (discount / orignal_price) * 100;

  return discountPercentage.toFixed(2);
};
