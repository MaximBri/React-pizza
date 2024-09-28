import { createSlice } from '@reduxjs/toolkit'

const initialState: { paginIndex: number } = {
  paginIndex: 1,
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPaginIndex(state, action: {payload: number}) {
      state.paginIndex = action.payload
    },
  },
})
export const selectPaginIndex = (state:{pagination: {paginIndex:number}}) => state.pagination.paginIndex
export const { setPaginIndex } = paginationSlice.actions
export default paginationSlice.reducer
