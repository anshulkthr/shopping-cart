import { FETCH_PRODUCTS } from './actionTypes';
import axios from 'axios';

import { productsAPI } from '../util';

const compare = {
  lowestprice: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },
  highestprice: (a, b) => {
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;
    return 0;
  },
    discount: (a, b) => {
        if (a.discount > b.discount) return -1;
        if (a.discount < b.discount) return 1;
        return 0;
    }

};

export const fetchProducts = (filters, sortBy, callback) => dispatch => {
  return axios
    .get(productsAPI)
    .then(res => {
      let products = res.data;
      
      if (!!filters && filters.length > 0) {
        let lastFilterVal = filters[filters.length - 1];
        products = products.filter(p => (lastFilterVal.min <= p.price && lastFilterVal.max >= p.price));
      }

      if (!!sortBy) {
        products = products.sort(compare[sortBy]);
      }

      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });
    })
    .catch(err => {
      console.log('Could not fetch products. Try again later.');
    });
};
