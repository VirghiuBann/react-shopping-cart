export const getTotals = (cart) => {
  let totalCost = 0
  let totalAmount = 0

  for (let { amount, price } of cart.values()) {
    totalCost += price * amount
    totalAmount += amount
  }
  return { totalCost, totalAmount }
}
