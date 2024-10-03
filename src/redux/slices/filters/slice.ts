import { createSlice, PayloadAction } from '@reduxjs/toolkit'
const initialState: FilterType = {
  categoryId: 0,
  sort: {
    id: 0,
    title: 'популярности',
    tech: 'rating',
  },
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters(state, action: { payload: number }) {
      state.categoryId = action.payload
    },
    setCategory(state, action: { payload: number }) {
      state.sort.id = action.payload
    },
    setAllFilters(
      state,
      action: PayloadAction<{ category: number; sort: string }>
    ) {
      state.categoryId = action.payload.category
      state.sort.tech = action.payload.sort
    },
  },
})

export const { setFilters, setCategory, setAllFilters } = filtersSlice.actions
export default filtersSlice.reducer