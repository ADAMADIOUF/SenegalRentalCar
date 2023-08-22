export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2)
}

export const updateCart = (state) => {
  // Calculate items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )

  // Calculate shipping price
  state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10)

  // Calculate tax price
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))
}

export const calculateTotalPrice = (state) => {
  const pickupDate = new Date(state.pickupDate)
  const returnDate = new Date(state.returnDate)
  const oneDay = 24 * 60 * 60 * 1000 // Number of milliseconds in a day
  const numberOfDays = Math.round((returnDate - pickupDate) / oneDay) + 1
  const totalPrice = numberOfDays * state.pricePerDay

  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice) +
    totalPrice
  ).toFixed(2)

  localStorage.setItem('cart', JSON.stringify(state))

  return state
}
