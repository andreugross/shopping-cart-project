const saveCartItems = (add) => localStorage.setItem('cartItems', JSON.stringify(add));

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
