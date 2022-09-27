import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert } from '@mui/material';
import { toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
import { addNewProduct } from '../features/Products/productsSlice.js';
import { fetchCategories } from '../features/Categories/categoriesSlice.js';
import { ProductValidationSchema } from '../schema/product';
import { uploadSingleFile } from '../utils/uploadFile';

type FormInputs = {
  name: string;
  price: number;
  description: string;
  avatar: string;
  category: string;
  developerEmail: string;
};

function AddProduct() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<FormInputs>({ resolver: yupResolver(ProductValidationSchema) });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.categories.categories);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
    resetField('avatar');
  };
  const onSubmit: SubmitHandler<FormInputs> = async (product: any) => {
    try {
      setLoading(true);
      if (selectedImage !== null) {
        const file = product.avatar[0];
        const imgUrl = await uploadSingleFile(file);
        product.avatar = imgUrl;
      } else {
        product.avatar =
          'data:image/png;base64,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';
      }
      console.log('dispatching,,,', product)
      const data = await dispatch(addNewProduct(product));
      console.log('dispatched', product)
      if (data.type !== 'products/addNewProduct/fulfilled') {
        toast.error(data.error.message, {
          type: 'error',
        });
        navigate('/products');
        return;
      }
      toast.success('Product added successfully', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setLoading(false);
      navigate('/products');
    } catch (error) {
      toast.error(error.message, {
        type: 'error',
      });
    }
  };

  return (
    <div className="flex">
      <div className="card w-full max-w-4xl flex-shrink-0 bg-base-100 shadow-lg shadow-slate-400 drop-shadow-2xl m-auto">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  className=" input input-info border-2 "
                  type="text"
                  placeholder="Name"
                  {...register('name')}
                />
                {errors.name?.message && (
                  <Alert
                    severity="error"
                    className="my-1 mb-2"
                    variant="filled"
                  >
                    {errors.name?.message}
                  </Alert>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Price</span>
                </label>
                <input
                  className=" input input-info border-2"
                  type="number"
                  placeholder="Price"
                  {...register('price')}
                />
                {errors.price?.message && (
                  <Alert
                    severity="error"
                    className="my-1 mb-2"
                    variant="filled"
                  >
                    {errors.price?.message}
                  </Alert>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
            <div className="form-control my-2">
                <label className="label">
                  <span className="label-text font-semibold">Category</span>
                </label>
                <select
                  className="select select-info w-full "
                  {...register('category', { required: true })}
                >
                  <option disabled selected value="">
                    Select Category
                  </option>
                  {categories?.map((category, idx) => (
                    <option key={idx + 1} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <Alert
                    severity="error"
                    className="my-1 mb-2"
                    variant="filled"
                  >
                    Please select a category
                  </Alert>
                )}
              </div>
              <div className="form-control my-2">
                <label className="label">
                  <span className="label-text font-semibold">Developer Email</span>
                </label>
                <input
                  className=" input input-info border-2"
                  type="text"
                  placeholder="Email"
                  {...register('developerEmail')}
                />
                {errors.developerEmail?.message && (
                  <Alert
                    severity="error"
                    className="my-1 mb-2"
                    variant="filled"
                  >
                    {errors.developerEmail?.message}
                  </Alert>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <div>
                <div className="form-control my-2">
                  <label className="label">
                    <span className="label-text font-semibold">Image</span>
                  </label>
                  <input
                    className="file:mr-4 file:rounded-full file:border-0
                  file:bg-violet-50 file:py-2
                  file:px-4 file:text-sm
                  file:font-semibold file:text-cyan-500
                  hover:file:bg-violet-100 "
                    type="file"
                    accept="image/*"
                    placeholder="Image"
                    {...register('avatar')}
                    onChange={imageChange}
                  />
                  {errors?.avatar && (
                    <Alert
                      severity="error"
                      className="my-1 mb-2"
                      variant="filled"
                    >
                      {errors.avatar?.message}
                    </Alert>
                  )}
                </div>
              </div>
              <div className="form-control my-2">
                <label className="label">
                  <span className="label-text font-semibold">Description</span>
                </label>
                <textarea
                  className="textarea textarea-info h-24 border-2"
                  placeholder="Description"
                  {...register('description')}
                />

                {errors.description?.message && (
                  <Alert
                    severity="error"
                    className="my-1 mb-2"
                    variant="filled"
                  >
                    {errors.description?.message}
                  </Alert>
                )}
              </div>
            </div>
            {!loading && (
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn  border-2 border-cyan-400  bg-sky-400 py-2 px-4 text-base font-bold text-white shadow shadow-sky-400 hover:bg-sky-500 "
                >
                  Create
                </button>
              </div>
            )}
            {loading && (
              <div className="flex min-h-fit items-center justify-center">
                <BeatLoader size={20} color="#34d399" margin={2} />
              </div>
            )}
          </form>
        </div>
      </div>
      {selectedImage && (
        <div>
          <div className="mt-4 flex h-full flex-col gap-y-2 rounded-md bg-slate-100 px-4 ">
            <h1 className="font-semibold text-gray-600">Image Preview</h1>
            <div>
              <img src={URL.createObjectURL(selectedImage)} alt="Error" />
            </div>
            <button
              type="button"
              className="btn btn-info mx-auto text-xs text-white shadow-md shadow-cyan-400"
              onClick={removeSelectedImage}
            >
              Remove This Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProduct;
