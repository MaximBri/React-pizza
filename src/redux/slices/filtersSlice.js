import { createSlice } from "@reduxjs/toolkit"
import categories from "../../data/categories"

const initialState = { // начальное значение
  categoryId: 0,
  sort: {
    title: categories[0].title,
    tech: categories[0].tech,
  }
}

const filtersSlice = createSlice({ 
  // name: 'filters',
})