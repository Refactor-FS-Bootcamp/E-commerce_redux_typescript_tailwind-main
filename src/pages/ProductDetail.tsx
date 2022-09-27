import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import { CategoryType } from '../types';
import { selectProductById, deleteProduct } from '../features/Products/productsSlice.js';
import { addToCart } from '../features/Favorite/FavoriteSlice.js';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function ProductDetail() {
  useEffect(() => {
    document.title = 'Products';
  });
  
  const dispatch = useDispatch();
  const delProduct = (id: any) => {
    const deleteSwal = withReactContent(Swal);
    deleteSwal
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            dispatch(deleteProduct(id));
            window.history.go(-1)
            deleteSwal.fire('Deleted!', 'Product has been deleted.', 'success');
          } catch (error) {
            deleteSwal.fire(
              'Error!',
              'Something went wrong, please try again.',
              'error'
            );
          }
        }
      });
  };
  const { id } = useParams();
  const product = useSelector((state: any) => selectProductById(state, id));
  console.log('noww_redux',product)
  const { categories } = useSelector((state: any) => state.categories);
  const cate_id = categories?.find((category: CategoryType) => {
    return category.name == product?.category
  })
  return (
    <div className="min-h-screen py-2 px-20">
      <div className="breadcrumbs text-xs text-gray-500">
        <ul>
          <li>
            <NavLink to="/">
              <HomeIcon fontSize="small" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to={`/categories/${cate_id._id}`}>
              
            {product?.category}</NavLink>
          </li>
          <li>
            <NavLink className="font-semibold" to={`/products/${product?._id}`}>
              {product?.name}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex justify-between gap-x-4 py-2">
        <div className="max-w-2xl md:w-1/2 ">
          <div>
            <img src={product?.avatar} alt="" />
          </div>
          <div className="py-4">
            <p className="max-w-fit  border-b-[3px] border-blacklight pb-3 font-semibold text-white">
              Details
            </p>
            <p className="py-4 text-gray-300">{product?.description}</p>
          </div>
        </div>

        <div className="pr-20 text-left md:w-[30%]">
          <h2 className="border-b py-4 font-PlayfairDisplay text-2xl">
            {product?.name}
          </h2>
          <div className="py-6">
            <div>
              <div className="mb-5 flex items-center">
                <div>
                  <div className=" relative mr-2">
                    <span className="absolute bottom-1 align-top text-base text-gray-300">
                      $
                    </span>
                    <span className="ml-[10px] align-top font-OpenSans text-[22px] font-semibold leading-[22px]">
                      {product?.price}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex w-full">
                <button
                  type="button"
                  className="btn  border-2 border-cyan-400  bg-green-400 py-2 px-4 text-base font-bold text-white shadow shadow-sky-400 hover:bg-green-600"
                  onClick={() => {
                    dispatch(addToCart(product));
                  }}
                >
                  Add to Favorites
                </button>
              </div>
              <div className="mt-5">
              <button
                type="button"
                className="btn  border-2 border-cyan-400  bg-red-400 py-2 px-4 text-base font-bold text-white shadow shadow-sky-400 hover:bg-red-800 "
                onClick={() => {delProduct(id);console.log('called delp 1st with id', id)}}
              >
                Delete!!
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
