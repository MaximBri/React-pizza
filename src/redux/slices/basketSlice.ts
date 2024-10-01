import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {getCountFromLS} from '../../utils/getCountFromLS'
import {getPriceFromLS} from '../../utils/getPriceFromLS'
import { getDataFromLS } from '../../utils/getDataFromLS'

interface ItemType {
  id: number
  size: number
  type: number
  price: number
  title: string
  sizes: []
}
interface ItemsType {
  totalPrice: number
  count: number
  items: ItemTypeWithCount[]
}
type ItemTypeWithCount = ItemType & {
  count: number
}
type DeleteType = {
  id: number
  size: number
  type: number
}

const initialState: ItemsType = {
  // totalPrice: 0,
  // count: 0,
  // items: [],
  totalPrice: getPriceFromLS(),
  count: getCountFromLS(),
  items: getDataFromLS(),
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addGood(state, action: PayloadAction<ItemType>) {
      let check = false
      const { id, size, type }: ItemType = { ...action.payload }
      state.items.map((item: ItemTypeWithCount) => {
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
      const { id, size, type }: DeleteType = action.payload
      state.items.map((item, i) => {
        if (item.id === id && item.size === size && item.type === type) {
          item.count === 1 ? state.items.splice(i, 1) : (item.count -= 1)
          state.totalPrice -= item.price
        }
      })
      state.count -= 1
    },
    deleteGoods(state, action) {
      const { id, size, type }: DeleteType = action.payload
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
