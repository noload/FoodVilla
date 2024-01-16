import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/**
 * ####    Setting up store and slice  ####
 *
 * create store
 *       configureStore( ) -->import from RTK
 *
 * Provide my store to app
 *  - <Provider store={store}/> -->import fromm react-redux
 *
 * Slice
 *  --createSlice() --> import from RTK
 *          name:"",
 *          initialState:{},
 *          reducers:{
 *
 *             action:function(state, action),
 *
 *                    ex
 *                  addItem:(state,action)=>{state=> action.payload }
 *
 *                        }
 *
 * export const {addItem, } = cartSlice.actions
 *
 * export default cartSlice.reducer
 *
 * put that slice into store
 * {
 *  reducer:{cartSlice}
 *
 * }
 */
