const fetchProducts = async (param) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${param}`);
  const results = await response.json();
  return results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
