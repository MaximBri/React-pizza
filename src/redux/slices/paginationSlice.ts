import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState: { paginIndex: number } = {
  paginIndex: 1,
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPaginIndex(state, action: PayloadAction<number>) {
      state.paginIndex = action.payload
    },
  },
})
export const selectPaginIndex = (state: RootState) => state.pagination.paginIndex
export const { setPaginIndex } = paginationSlice.actions
export default paginationSlice.reducer
