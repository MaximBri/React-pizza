import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: {items: ItemType[]} = {
  items: [],
}

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas(state, action: PayloadAction<ItemType[]>) {
      state.items = action.payload
    },
  },
})

export const { setPizzas } = pizzasSlice.actions
export default pizzasSlice.reducer
