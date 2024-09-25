import { configureStore } from '@reduxjs/toolkit'
import filters from './slices/filtersSlice'
import pagination from './slices/paginationSlice'
import search from './slices/searchSlice'
import basket from './slices/basketSlice'
import pizzas from './slices/pizzasSlice'

export const store = configureStore({
  reducer: {
    filters,
    pagination,
    search,
    basket,
    pizzas,
  },
})