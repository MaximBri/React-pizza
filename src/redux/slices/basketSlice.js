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
      let check = false
      const { id, size, type } = { ...action.payload }
      state.items.map((item) => {
        if (id === item.id && size === item.size && type === item.type) {
          item.count += 1
          check = true
        }
      })
      if (!check) {
        state.items.push({ ...action.payload, count: 1 })
      }
      state.totalPrice += action.payload.price
      state.count += 1
    },
    clearAll(state) {
      state.items = []
      state.totalPrice = 0
      state.count = 0
    },
    deleteGood(state, action) {
      const { id, size, type } = action.payload
      state.items.map((item, i) => {
        if (item.id === id && item.size === size && item.type === type) {
          item.count === 1 ? state.items.splice(i, 1) : (item.count -= 1)
          state.totalPrice -= item.price
        }
      })
      state.count -= 1
    },
    deleteGoods(state, action) {
      const { id, size, type } = action.payload
      state.items.map((item, i) => {
        if (item.id === id && item.size === size && item.type === type) {
          state.count -= item.count
          state.totalPrice -= item.price * item.count
          state.items.splice(i, 1)
        }
      })
    },
  },
})

export const { addGood, clearAll, deleteGood, deleteGoods } =
  basketSlice.actions
export default basketSlice.reducer
