import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch1(state, action) {
      state.value = action.payload
    },
  },
})

export const { setSearch1 } = searchSlice.actions
export default searchSlice.reducer
