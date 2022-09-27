import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeItem} from '../../features/Favorite/FavoriteSlice.js';
import { selectAllCategories } from '../../features/Categories/categoriesSlice.js';

function CartItem({ item }) {
  const { name, _id, price, avatar } = item;
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => selectAllCategories(state));
  return (
    <div className="-mx-8 flex items-center px-6 py-5 hover:bg-gray-100">
      <div className="flex w-2/4">
        <div className="w-20">
          <img className="h-24" src={avatar} alt={name} />
        </div>
        <div className="ml-4 flex  flex-col justify-between">
          <span className="text-sm font-bold">{name}</span>
          <span className="text-xs text-red-500">
          {categories?.map((category: any) => {
              if (category.name === item.category) {
                return category.name;
              }
              return false;
            })}
          </span>
        </div>
      </div>
      <span className="w-1/4 text-center text-sm font-semibold ml-64">
        {"$" + (price)}
      </span>
      <button
            type="button"
            className="w-1/4 text-center text-sm font-semibold ml-40"
            onClick={() => dispatch(removeItem(_id))}
          >
            <svg className="align-middle text-xs" width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.803 2.306l-0.075 -0.078c-1.437 -1.469 -3.687 -1.616 -5.3 -0.463L10.5 4.997l-3 2 1.5 4 -4.5 -4.5 3 -2 -0.894 -2.703C4.991 0.613 2.719 0.75 1.272 2.231l-0.075 0.075C-0.325 3.863 -0.391 6.341 0.969 8l6.628 6.831c0.222 0.228 0.581 0.228 0.803 0L15.031 7.997c1.359 -1.656 1.294 -4.135 -0.228 -5.691z"/></svg></button>
    </div>
  );
}

export default CartItem;
