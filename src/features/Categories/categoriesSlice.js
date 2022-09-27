import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCategories } from '../../api/categories';

const initialStateValue = {
  categories: [],
  loading: false,
  status: 'idle',
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const { data } = await getAllCategories();
    return data.categories;
  }
);
export const createCategory = createAsyncThunk(
  'categories/createCategory',
  async (category) => {
    const { data } = await add(category);
    return data;
  }
);



const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialStateValue,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
      state.status = 'success';
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.loading = false;
      state.status = 'error';
    });
    builder.addCase(createCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createCategory.fulfilled, (state, action) => {
      state.categories.push(action.payload);
      state.loading = false;
      state.status = 'success';
    });
    builder.addCase(createCategory.rejected, (state) => {
      state.loading = false;
      state.status = 'error';
    });
   
   
  },
});

export const selectAllCategories = (state) => state.categories.categories;

export const selectCategoryById = (state, id) => {
  const category = state.categories.categories.find(
    (category) => category._id === id
  );
  return category;
};

export default categoriesSlice.reducer;
