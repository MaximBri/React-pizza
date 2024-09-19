import React from 'react'
import axios from 'axios'
import debounce from 'lodash.debounce'
import { useDispatch, useSelector } from 'react-redux'

import { selectPaginIndex, setPaginIndex } from '../redux/slices/paginationSlice'
import { setSearch1 } from '../redux/slices/searchSlice'
import { setPizzas } from '../redux/slices/pizzasSlice'
import Good from './Good'
import GoodSceleton from './GoodSceleton'
import Search from './Search'
import Pagination from './Pagination'

const Goods = ({ API_URl }) => {
  // console.log('Goods update...')
  const dispatch = useDispatch()
  const paginIndex = useSelector(selectPaginIndex)
  const filter = useSelector((state) => state.filters)
  const [loadData, setLoadData] = React.useState(true)
  const [search, setSearch] = React.useState('')
  const [valueS, setValueS] = React.useState('')
  const [countPages, setCountPages] = React.useState(1)
  const pizzas = useSelector((state) => state.pizzas.items)
  const changeValueS = (text) => {
    dispatch(setPaginIndex(1))
    setLoadData(true)
    setValueS(text)
    changeSearch(valueS)
  }
  const changeSearch = React.useCallback(
    debounce((valueS) => {
      valueS.length !== 1? dispatch(setSearch1(valueS)): dispatch(setSearch1(''))
      setLoadData(false)
    }, 300),
    []
  )
  React.useEffect(() => {
    setLoadData(true)
    axios.get(API_URl).then((data) => {
      dispatch(setPizzas(data.data.items))
      setCountPages(data.data.meta.total_pages)
      setLoadData(false)
    }).catch((err) => {
      alert("Ошибка при получении пицц")
      console.log(err)
    })
  }, [API_URl, paginIndex, filter.categoryId, search])
  const changePageIndex = (index) => {
    if (index > 0 && index <= countPages) dispatch(setPaginIndex(index))
  }
  return (
    <>
      <div className='content__top'>
        <h2 className='content__title'>Все пиццы</h2>
        <Search text={valueS} setText={changeValueS} />
      </div>
      <div className='content__items'>
        {loadData
          ? Array.from({ length: 4 }).map((_, index) => (
              <GoodSceleton key={index} />
            ))
          : search === ''
          ? pizzas.map((item) => <Good data={item} key={item.id} />)
          : pizzas
              .filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => <Good data={item} key={item.id} />)}
        {pizzas.length === 0 && !loadData && <h1>Ничего не найдено</h1>}
      </div>
      {countPages !== 0  && <Pagination count={countPages} swap={changePageIndex} />}
    </>
  )
}

export default Goods
