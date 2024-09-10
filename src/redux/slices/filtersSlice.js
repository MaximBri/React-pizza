import { createSlice } from "@reduxjs/toolkit"

const initialState = { 
  categoryId: 0,
  sort: {
    id: 0,
    title: 'популярности',
    tech: 'rating',
  }
}

const filtersSlice = createSlice({ 
  name: 'filters',
  initialState,
  reducers: {
    setFilters(state, action){
      state.categoryId = action.payload
    },
    setCategory(state, action){
      state.sort.id = action.payload
    },
    setAllFilters(state, action){
      state.categoryId = action.payload.category
      state.sort.tech = action.payload.sort
    }
  }
})

export const {setFilters, setCategory, setAllFilters} = filtersSlice.actions
export default filtersSlice.reducer