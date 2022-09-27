import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialStateValue = {
  items: [],
  totalAmount: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialStateValue,
  reducers: {
   
    addToCart: (state, action) => {
      const { _id, name, price, avatar, category } = action.payload;
      if (state.items.find((item) => item._id === _id)) {
       
        toast(`✈️  Already Added!! `, {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        state.items.push({
          _id,
          name,
          price,
          avatar,
          category,
          amount: 1,
          total: price,
        });
        toast('✌ Add to Favorite Success! ', {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
      toast('😢 Remove from Favorite!', {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    clearCart: (state, action) => {
      state.items = [];
    },
 
  },
});

export const {
   addToCart,
  removeItem,
   clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
