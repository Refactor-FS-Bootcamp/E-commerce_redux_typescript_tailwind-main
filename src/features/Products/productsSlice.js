import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  getAllProducts,
  add, 
  getProduct
} from '../../api/products';

const initialStateValue = {
  products: [],
  loading: false,
  status: 'idle',
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    console.log('called fetchproducts')
    const { data } = await getAllProducts();
    console.log('products',data.products)
    return data.products;
  }
);

export const addNewProduct = createAsyncThunk(
  'products/addNewProduct',
  async (product) => {
    console.log('calling add')
    const { data } = await add(product);
    console.log('returndata', data)
    return data;
  }
);


export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id,{ fulfillWithValue, rejectWithValue }) => {
    console.log('called dp')
    try {
      const { data } = await getProduct(id);
      console.log('data.product:',data.product)
      return fulfillWithValue(data.product)
    } catch (error) {
      return rejectWithValue(error.response.data)     
    }
  }
);
const productsSlice = createSlice({
  name: 'products',
  initialState: initialStateValue,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      console.log('fd', fetchProducts)
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.status = 'success';
      console.log()
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.loading = false;
      state.status = 'error';
    });
    builder.addCase(addNewProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addNewProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
      state.loading = false;
      state.status = 'success';
    });
    builder.addCase(addNewProduct.rejected, (state) => {
      state.loading = false;
      state.status = 'error';
    });
    
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
      
      console.log('pending')
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      console.log('aaa', action.payload)
      const { _id } = action.payload;
      console.log('herhee:', _id)
      console.log('state.products:',state.products)
      const product = state.products.find((product) => product._id === _id);
      console.log('productwa', product)
      try{console.log('trying');state.products.splice(state.products.indexOf(product), 1);console.log('donetrying',state.products)}
      catch(e){console.log('errrrrr',e)}
      
      state.loading = false;
      state.status = 'success';
      console.log('calling redux delete id:', _id)
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.status = 'error';
      
      console.log('rejected')
    });
  },
});

export const selectProductById = (state, id) => {
  return state.products.products.find((product) => product._id === id);
};



export const {removeItemByID} = productsSlice.actions;
export default productsSlice.reducer;
