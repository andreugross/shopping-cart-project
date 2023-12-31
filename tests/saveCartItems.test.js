const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {

  beforeEach(() => {
    saveCartItems('<ol><li>Item</li></ol>');
  })

  it('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    expect(localStorage.setItem).toBeCalled();
  });

  it('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    expect(localStorage.setItem).toBeCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
  
});
