import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import qs from 'qs'

import Goods from './Goods'
import Filters from './Filters'
import categories from '../data/categories'
import {
  selectPaginIndex,
  setPaginIndex,
} from '../redux/slices/pagination/slice'
import { selectSearch } from '../redux/slices/search/slice'

const API_URl: string = 'https://45f0a3a14b0030e3.mokky.dev/Items'

const Main: React.FC = () => {
  // console.log('Main update...')
  type Filter = {
    categoryId: number
    sort: {
      id: number
      title: string
      tech: string
    }
  }
  const navigate = useNavigate()
  const paginIndex = useSelector<any, number>(selectPaginIndex)
  const search = useSelector<any, string>(selectSearch)
  const filter = useSelector<any, Filter>((state) => state.filters)
  const category = filter.sort.id
  const addSort: string = 'sortBy=' + categories[category].tech + '&'
  const addFilter = filter.categoryId
    ? 'category=' + filter.categoryId + '&'
    : ''
  const addSearch = search ? 'title=*' + search + '*&' : ''
  let addUrl = `${API_URl}?${addFilter}${addSort}${addSearch}page=${paginIndex}&limit=4`
  React.useEffect(() => {
    const query = qs.stringify({
      page: paginIndex ? paginIndex : 1,
      category: filter.categoryId,
      sort: categories[filter.sort.id]?.tech,
    })
    navigate(`?${query}`)
  }, [paginIndex, filter.categoryId, filter.sort.id, navigate])
  const data = useSelector<any, []>((state) => state.basket.items)
  const first = React.useRef(false);
  React.useEffect(() => {
    if(first.current) localStorage.setItem('Pizzas', JSON.stringify(data))
    first.current = true
  }, [data])
  return (
    <>
      <Filters />
      <Goods API_URl={addUrl} />
    </>
  )
}

export default Main
