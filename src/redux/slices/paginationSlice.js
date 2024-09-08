import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  paginIndex: 1,
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPaginIndex(state, action){
      state.paginIndex = action.payload
    },
  }
})

export const {setPaginIndex} = paginationSlice.actions
export default paginationSlice.reducer