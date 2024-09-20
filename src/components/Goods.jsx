import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import {
  selectPaginIndex,
  setPaginIndex,
} from '../redux/slices/paginationSlice'
import { setSearch } from '../redux/slices/searchSlice'
import { setPizzas } from '../redux/slices/pizzasSlice'
import Good from './Good'
import GoodSceleton from './GoodSceleton'
import Search from './Search'
import Pagination from './Pagination'

const Goods = ({ API_URl }) => {
  // console.log('Goods update...')
  const dispatch = useDispatch()
  const paginIndex = useSelector(selectPaginIndex)
  const search = useSelector((state) => state.search.value)
  const filter = useSelector((state) => state.filters)
  const [fetch, setFetch] = React.useState('')
  const [loadData, setLoadData] = React.useState(true)
  const [countPages, setCountPages] = React.useState(1)
  const pizzas = useSelector((state) => state.pizzas.items)
  const debounce = (funct, wait) => {
    let timeout
    return function (...args) {
      const context = this
      clearTimeout(timeout)
      timeout = setTimeout(() => funct.apply(context, args), wait)
    }
  }
  const onChangeInput = (text) => {
    dispatch(setSearch(text))
    dispatch(setPaginIndex(1))
  }
  const debouncedDispatch = React.useCallback(
    debounce((text) => onChangeInput(text), 350),
    [dispatch]
  )
  const changeSearch = (text) => {
    debouncedDispatch(text)
    setFetch(text)
  }
  React.useEffect(() => {
    setLoadData(true)
    axios
      .get(API_URl)
      .then((data) => {
        dispatch(setPizzas(data.data.items))
        setCountPages(data.data.meta.total_pages)
        setLoadData(false)
      })
      .catch((err) => {
        alert('Ошибка при получении пицц')
        console.log(err)
      })
  }, [API_URl, paginIndex, filter.categoryId, search, dispatch])

  const changePageIndex = (index) => {
    if (index > 0 && index <= countPages) {
      dispatch(setPaginIndex(index))
    }
  }
  return (
    <>
      <div className='content__top'>
        <h2 className='content__title'>Все пиццы</h2>
        <Search text={fetch} setText={changeSearch} />
      </div>
      <div className='content__items'>
        {loadData
          ? Array.from({ length: 4 }).map((_, index) => (
              <GoodSceleton key={index} />
            ))
          : pizzas.map((item) => <Good data={item} key={item.id} />)}
        {pizzas.length === 0 && !loadData && <h1>Ничего не найдено</h1>}
      </div>
      {countPages !== 0 && (
        <Pagination count={countPages} swap={changePageIndex} />
      )}
    </>
  )
}

export default Goods
