import { createSlice } from '@reduxjs/toolkit'

const initialState: {value: string} = {
  value: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: {payload: string}) {
      state.value = action.payload
    },
  },
})
export const selectSearch = (state:{search:{value: string}}) => state.search.value; 
export const { setSearch } = searchSlice.actions
export default searchSlice.reducer
