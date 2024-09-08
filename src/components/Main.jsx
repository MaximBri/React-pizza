import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'

import Goods from './Goods'
import Filters from './Filters'
import categories from '../data/categories'
import { setCategory } from '../redux/slices/filtersSlice'

const API_URl = 'https://45f0a3a14b0030e3.mokky.dev/Items'

const Main = () => {
  // console.log('Main update...')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const paginIndex = useSelector((state) => state.pagination.paginIndex)
  const filter = useSelector((state) => state.filters)
  const category = useSelector((state) => state.filters.sort.id)
  React.useEffect(() => {
    if(window.location.search){
      const params = qs.parse(window.location.search.substring(1));
      // console.log(params);
      // console.log("Pagin = ", params.page)
      dispatch(setCategory(params.category))
      // console.log("Pagin Index = ", paginIndex)
    }
    const query = qs.stringify({
      page: paginIndex,
      category: filter.categoryId,
      sort: categories[filter.sort.id].tech,
    })
    navigate(`?${query}`)
  }, [API_URl, paginIndex, filter.categoryId])
  // console.log(filter.categoryId);
  const addFilter = filter.categoryId ? 'category=' + filter.categoryId : ''
  const addSort = category ? 'sortBy=' + categories[category].tech : ''
  let addUrl = `${API_URl}?${addFilter}&${addSort}`
  return (
    <>
        <Filters />
        <Goods API_URl={addUrl} />
    </>
  )
}

export default Main
