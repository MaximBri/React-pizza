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
const Goods: React.FC<{ API_URl: string }> = ({ API_URl }) => {
  type Filter = {
    categoryId: number
    sort: {
      id: number
      title: string
      tech: string
    }
  }
  console.log('Goods update...')
  const dispatch = useDispatch()
  // const paginIndex = useSelector(selectPaginIndex)
  // const search = useSelector<any, string>((state) => state.search.value)
  // const filter = useSelector<any, Filter>((state) => state.filters)
  const [fetch, setFetch] = React.useState<string>('')
  const [loadData, setLoadData] = React.useState<boolean>(true)
  const [countPages, setCountPages] = React.useState<number>(1)
  const pizzas = useSelector<any, []>((state) => state.pizzas.items)
  const debounce = <T extends (...args: any[]) => any>(
    funct: T,
    wait: number
  ) => {
    let timeout: ReturnType<typeof setTimeout> | undefined
    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
      const context = this
      clearTimeout(timeout)
      timeout = setTimeout(() => funct.apply(context, args), wait)
    }
  }
  const onChangeInput = (text: string) => {
    dispatch(setSearch(text))
    dispatch(setPaginIndex(1))
  }
  const debouncedDispatch = React.useCallback(
    debounce((text: string) => onChangeInput(text), 350),
    [dispatch]
  )
  const changeSearch = React.useCallback(
    (text: string) => {
      debouncedDispatch(text)
      setFetch(text)
    }, []
  )
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
  }, [API_URl, dispatch])

  const changePageIndex = (index: number) => {
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
          : pizzas.map((item, i) => <Good data={item} key={i} />)}
        {pizzas.length === 0 && !loadData && <h1>Ничего не найдено</h1>}
      </div>
      {countPages !== 0 && (
        <Pagination count={countPages} swap={changePageIndex} />
      )}
    </>
  )
}

export default Goods
