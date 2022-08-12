const itemsSection = document.getElementsByClassName('items')[0];
const cartItems = document.querySelector('.cart__items');
const removeAllCart = document.querySelector('.empty-cart');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(cartItems.innerHTML);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createFavorites = async (ident) => {
  const items = await fetchItem(ident);
  const { id, title, price } = items;
  const item = createCartItemElement({ sku: id, name: title, salePrice: price });
  cartItems.appendChild(item);
  saveCartItems(cartItems.innerHTML);
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const buttonFavorite = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  buttonFavorite.addEventListener('click', () => createFavorites(sku));
  section.appendChild(buttonFavorite);

  return section;
};

const renderProducts = async () => {
  const products = await fetchProducts('computador');
  products.results.forEach((product) => {
    const createdCard = createProductItemElement({
      ...product,
      sku: product.id,
      name: product.title,
      image: product.thumbnail,
    });
    itemsSection.appendChild(createdCard);
  });
};

const deleteFavoriteCartItem = () => {
  const deleteCart = cartItems.querySelectorAll('.cart__item');
  const result = deleteCart.forEach((element) => element
    .addEventListener('click', cartItemClickListener));
  return result;
};

const deleteFavoriteCartList = () => {
  removeAllCart.addEventListener('click', () => { cartItems.innerHTML = ''; });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

window.onload = async () => {
  await renderProducts();
  cartItems.innerHTML = getSavedCartItems();
  deleteFavoriteCartItem();
  deleteFavoriteCartList();
};
