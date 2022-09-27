import instance from './instance';
import { CategoryType } from '../types';

export const getAllCategories = () => {
  const URL = '/api/categories';
  console.log('called getallcategories')
  return instance.get(URL);
};

export const getDetail = (id: string) => {
  const URL = `/api/categories/${id}`;
  return instance.get(URL);
};
