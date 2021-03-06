import axios from 'axios';

/* ---- Action Types ---- */

const GET_CART = 'GET_CART';

/* ---- Action Creators --- */

const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
};


/* --- Thunks --- */
export const loadCart = () => {
  return function thunk (dispatch) {
    return axios.get('/api/cart')
      .then(res => res.data)
      .then(cart => dispatch(getCart(cart)))
      .catch(err => console.error(err));
  };
};

export const addToCart = (product) => {
  return function thunk (dispatch) {
    return axios.post(`/api/cart/add-to-cart/products/${product.id}`, product)
      .then(res =>  res.data)
      .then(cart => dispatch(getCart(cart)))
      .catch(err => console.error(err))
  }
}

export const removeFromCart = (product) => {
  return function thunk (dispatch) {
    return axios.post(`/api/cart/remove-from-cart/products/${product.id}`, product)
      .then(res => res.data)
      .then(cart => dispatch(getCart(cart)))
      .catch(err => console.error(err));
  }
}

/* --- Reducer --- */
export default function (state = [], action) {
  switch (action.type) {
    case GET_CART:
      return action.cart.products;
    default:
      return state;
  }
}
