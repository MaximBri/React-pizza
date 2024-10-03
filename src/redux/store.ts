import { configureStore } from '@reduxjs/toolkit'
import filters from './slices/filters/slice'
import pagination from './slices/pagination/slice'
import search from './slices/search/slice'
import basket from './slices/basket/slice'
import pizzas from './slices/pizzas/slice'

export const store = configureStore({
  reducer: {
    filters,
    pagination,
    search,
    basket,
    pizzas,
  },
})

export type RootState = ReturnType<typeof store.getState>