import { createSlice } from '@reduxjs/toolkit'
interface ItemType {
  id: number
  imageUrl: string
  title: string
  price: number
  sizes: number[]
  types: number[]
}
const initialState: {items: ItemType[]} = {
  items: [],
}

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    setPizzas(state, action: {payload: ItemType[]}) {
      state.items = action.payload
    },
  },
})

export const { setPizzas } = pizzasSlice.actions
export default pizzasSlice.reducer
