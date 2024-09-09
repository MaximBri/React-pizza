import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice: 0,
  count: 0,
  items: [],
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addGood(state, action) {
      state.items.push(action.payload)
      state.totalPrice += action.payload.price
      state.count += 1;
    },
  },
})

export const { addGood } = basketSlice.actions
export default basketSlice.reducer
