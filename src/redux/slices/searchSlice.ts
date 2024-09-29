import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

const initialState: {value: string} = {
  value: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.value = action.payload
    },
  },
})
export const selectSearch = (state: RootState) => state.search.value; 
export const { setSearch } = searchSlice.actions
export default searchSlice.reducer
