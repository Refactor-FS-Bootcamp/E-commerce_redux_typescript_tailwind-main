import { ProductType } from '../types';
import instance from './instance';

export const getAllProducts = () => {
  const URL = '/api/products';
  console.log('called getallproducts')
  return instance.get(URL);
};

export const add = (product: ProductType) => {
  const URL = `/api/products`;
  console.log('calling instance', product)
  return instance.post(URL, product);
};

export const getProduct = (id) => {
  const URL = `/api/products/${id}`;
  console.log('called getProduct')
  return instance.get(URL);
};