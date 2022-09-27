import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HashLoader } from 'react-spinners';
import HomeIcon from '@mui/icons-material/Home';
import { getCategoryDetails } from '../features/Categories/categorySlice.js';
import ProductCard from './ProductCard';
import { ProductType } from '../types';

function ProductsByCategory() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { category, loading } = useSelector((state: any) => state.category);
  console.log('category',category)
  const { products } = useSelector((state: any) => state.products);
  useEffect(() => {
    dispatch(getCategoryDetails(id));
  }, [dispatch, id]);
  const product = products.filter((item, idx) => {
   return item.category === category?.category?.name})
  useEffect(() => {
    document.title = 'Products';
  }, []);
  return (
    <div className="min-h-screen py-2 px-4 md:px-20">
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
            <NavLink
              className="font-semibold"
              to={`/products/${category?.category?._id}`}
            >
              {category?.category?.name}
            </NavLink>
          </li>
        </ul>
      </div>
      {!loading && (
        <>
          <h1 className="text-left text-[25px] font-bold italic ">
            {category?.category?.name}
          </h1>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {product?.map((product: ProductType) => (
              <ProductCard key={product?._id} product={product} />
            ))}
          </div>
        </>
      )}
      {loading && (
        <div className=" absolute top-1/2 right-1/2 flex min-h-fit items-center justify-center">
          <HashLoader color="#36d7b7" />
        </div>
      )}
    </div>
  );
}

export default ProductsByCategory;
