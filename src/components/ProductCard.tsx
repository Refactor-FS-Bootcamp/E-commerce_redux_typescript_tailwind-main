import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import { CategoryType, ProductType } from '../types';
import { selectAllCategories } from '../features/Categories/categoriesSlice.js';

type Props = {
  product: ProductType;
};

function Product({ product }: Props) {
  const { name, price, _id, avatar } = product;
  const categories: CategoryType[] = useSelector(selectAllCategories);
  return (
    <div className="p-2 shadow drop-shadow-md;">
      <div className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 group-hover:scale-105 group-hover:border-2 border-purple-500">
          {product ? (
            <img
              alt={name}
              src={avatar}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          ) : (
            <Skeleton variant="rectangular" animation="wave" width="full" />
          )}
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
              <Link to={`/products/${_id}`}>
                <span aria-hidden="true" className="absolute inset-0" />
                {name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-white">
              {categories?.map((category: CategoryType) => {
                if (category.name === product.category) {
                  return category.name;
                }
                return false;
              })}
            </p>
          </div>
          <p className="text-sm font-semibold  text-white">
            {"$" + (price)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
