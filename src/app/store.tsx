import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import productsReducer from '../features/Products/productsSlice.js';
import categoriesReducer from '../features/Categories/categoriesSlice.js';
import categoryReducer from '../features/Categories/categorySlice.js';
import messageReducer from '../features/Messages/messageSlice.js';
import cartReducer from '../features/Favorite/FavoriteSlice.js';

const persistConfig = {
  key: 'root',
  storage,

};

const reducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  category: categoryReducer,
  message: messageReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
