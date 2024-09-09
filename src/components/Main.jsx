import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'

import Goods from './Goods'
import Filters from './Filters'
import categories from '../data/categories'
// import { setCategory } from '../redux/slices/filtersSlice'

const API_URl = 'https://45f0a3a14b0030e3.mokky.dev/Items'

const Main = () => {
  // console.log('Main update...')
  const navigate = useNavigate()
  // const dispatch = useDispatch()
  const paginIndex = useSelector((state) => state.pagination.paginIndex)
  const filter = useSelector((state) => state.filters)
  const category = useSelector((state) => state.filters.sort.id)
  const search = useSelector((state) => state.search.value)
  // const addFilter = 'category=' + filter.categoryId
  const addSort = 'sortBy=' + categories[category].tech + '&'
  const addFilter = filter.categoryId ? 'category=' + filter.categoryId + '&': ''
  // const addSort = category ? 'sortBy=' + categories[category].tech : ''
  const addSearch = search ? 'title=*' + search + '*&': ''
  console.log("Add search: ", addSearch);
  let addUrl = `${API_URl}?${addFilter}${addSort}${addSearch}page=${paginIndex}&limit=4`
  React.useEffect(() => {
    const query = qs.stringify({
      page: paginIndex,
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
