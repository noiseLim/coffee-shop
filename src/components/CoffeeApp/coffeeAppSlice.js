import { createSlice } from '@reduxjs/toolkit';

const coffeeAppSlice = createSlice({
  name: 'coffeeApp',
  initialState: {
    products: [],
    loading: true,
    error: false,
  },
  reducers: {
    productLoaded: (state, action) => {
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    },
    productRequested: (state) => {
      return {
        ...state,
        products: state.products,
        loading: true,
      };
    },
    productError: (state) => {
      return {
        ...state,
        products: state.products,
        error: true,
      };
    },
  },
});

export const { productLoaded, productRequested, productError } =
  coffeeAppSlice.actions;

export default coffeeAppSlice.reducer;
