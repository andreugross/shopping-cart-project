const fetchItem = async (id) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const results = await response.json();
  console.log(results);
  return results;
};
fetchItem('MLB1341706310');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
