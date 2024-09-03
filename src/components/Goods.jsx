import React from 'react'
import Good from './Good'
import GoodSceleton from './GoodSceleton'
import Search from './Search'
import Pagination from './Pagination'
import pageContext from '../contexts/pageContext'

const Goods = ({ API_URl, filter }) => {
  console.log('Goods update...')
  const { paginIndex, setPaginIndex } = React.useContext(pageContext)
  const [pizzas, setPizzas] = React.useState([])
  const [loadData, setLoadData] = React.useState(true)
  const [search, setSearch] = React.useState('')
  const [countPages, setCountPages] = React.useState(1)
  React.useEffect(() => {
    search
      ? console.log(API_URl)
      : console.log(API_URl + `&page=${paginIndex}&limit=4`)
    setLoadData(true)
    console.log('Запрос серверу...')
    search
      ? fetch(API_URl)
          .then((res) => res.json())
          .then((data) => {
            setPizzas(data)
            const filteredData = data.filter((item) => 
              item.title.toLowerCase().includes(search.toLowerCase())
            );
            const countPages = Math.ceil(filteredData.length / 4);
            setCountPages(countPages)
            setLoadData(false)
          })
      : fetch(API_URl + `&page=${paginIndex}&limit=4`)
          .then((res) => res.json())
          .then((data) => {
            setPizzas(data.items)
            setCountPages(data.meta.total_pages)
            setLoadData(false)
          })
  }, [API_URl, paginIndex, filter, search])
  console.log(paginIndex)
  const changePageIndex = (index) => {
    if (index > 0 && index <= countPages) setPaginIndex(index)
  }
  return (
    <>
      <div className='content__top'>
        <h2 className='content__title'>Все пиццы</h2>
        <Search text={search} setText={setSearch} />
      </div>
      <div className='content__items'>
        {loadData && search === ''
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
        {search !== '' &&
          pizzas.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          ).length === 0 && <h1>Ничего не найдено</h1>}
      </div>
      <Pagination count={countPages} swap={changePageIndex} />
    </>
  )
}

export default Goods
