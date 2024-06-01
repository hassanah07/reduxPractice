const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItems: []
};

const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(action.payload);
      state.cartItems.push(action.payload);
    }
  }
});
export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
