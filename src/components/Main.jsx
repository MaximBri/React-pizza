import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import qs from 'qs'

import Goods from './Goods'
import Filters from './Filters'
import categories from '../data/categories'
import { selectPaginIndex, setPaginIndex } from '../redux/slices/paginationSlice'
import { selectSearch } from '../redux/slices/searchSlice'

const API_URl = 'https://45f0a3a14b0030e3.mokky.dev/Items'

const Main = () => {
  // console.log('Main update...')
  const navigate = useNavigate()
  const paginIndex = useSelector(selectPaginIndex)
  const search = useSelector(selectSearch)
  const filter = useSelector((state) => state.filters)
  const category = filter.sort.id;
  const addSort = 'sortBy=' + categories[category].tech + '&'
  const addFilter = filter.categoryId ? 'category=' + filter.categoryId + '&': ''
  const addSearch = search ? 'title=*' + search + '*&': ''
  let addUrl = `${API_URl}?${addFilter}${addSort}${addSearch}page=${paginIndex}&limit=4`
  React.useEffect(() => {
    const query = qs.stringify({
      page: paginIndex? paginIndex: 1,
      category: filter.categoryId,
      sort: categories[filter.sort.id]?.tech,
    })
    navigate(`?${query}`)
  }, [paginIndex, filter.categoryId, filter.sort.id, navigate])
  
  return (
    <>
        <Filters />
        <Goods API_URl={addUrl} />
    </>
  )
}

export default Main
