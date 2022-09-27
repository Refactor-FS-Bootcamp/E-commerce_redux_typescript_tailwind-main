import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {  clearCart } from '../../features/Favorite/FavoriteSlice.js';
import CartItem from './FavoriteItem';

function Cart() {
  const { items } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
 
  useEffect(() => {
    document.title = 'Cart';
  }, []);
  if (items.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="-translate-y-1/2 text-center">
          <h1 className="text-3xl font-bold">
          <svg className='m-auto' width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000" d="M72.943 4.98c-6.538 -0.013 -13.206 2.626 -18.445 8.429l7.27 28.351 -6.531 0.006 6.903 25.799 -22.796 -36.792 9.771 1.05L39.551 9.241C23.523 -0.279 0.929 7.89 1.66 30.89c0.86 27.039 37.343 36.055 48.321 64.771 11.597 -28.718 49.074 -36.002 48.175 -64.77 -0.501 -16.024 -12.617 -25.885 -25.213 -25.909z"/>
            </svg> Your Favorites is empty
          </h1>
          <Link
            to="/products"
            className="text-lg font-semibold hover:text-blueDark"
          >
            Go to products
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="my-10 mx-20 flex min-h-screen shadow-md items-center justify-center">
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex  justify-between border-b pb-8">
          <h1 className="text-2xl font-semibold">Favorites</h1>
          <h2 className="flex flex-col text-2xl font-semibold">
            {items?.length} Items
            <button
              type="button"
              className="text-xs text-gray-500 hover:text-gray-700 hover:underline"
              onClick={() => {
                dispatch(clearCart());
                toast.info('Favorites cleared successfully', {
                  position: 'bottom-right',
                });
              }}
            >
              Clear Favorites
            </button>
          </h2>
        </div>
        <div className="mt-10 mb-5 flex ">
          <h3 className="w-2/4 text-xs font-semibold uppercase text-gray-600">
            Product Details
          </h3>
          <h3 className="w-1/4  text-center text-xs font-semibold uppercase text-gray-600">
            Price
          </h3>
          <h3 className="w-1/4  text-center text-xs font-semibold uppercase text-gray-600">
            Remove
          </h3>
        </div>
        <div className="cartItem overflow-auto  md:max-h-[500px]">
          {items?.map((item, idx) => (
            <CartItem key={idx + 1} item={item} />
          ))}
        </div>

        <Link
          to="/products"
          className="mt-10 flex text-sm font-semibold text-indigo-600"
        >
          <svg
            className="mr-2 w-4 fill-current text-indigo-600"
            viewBox="0 0 448 512"
          >
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          Back
        </Link>
      </div>
    </div>
  );
}

export default Cart;
