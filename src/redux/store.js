import { configureStore } from '@reduxjs/toolkit'
import filters from './slices/filtersSlice'
import pagination from './slices/paginationSlice'
import search from './slices/searchSlice'

export const store = configureStore({
  reducer: {
    filters,
    pagination,
    search,
  },
})