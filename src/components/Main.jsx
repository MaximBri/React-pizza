import React from 'react'
import Filters from './Filters'
import Goods from './Goods'

import pageContext from '../contexts/pageContext'
import categories from '../data/categories'

const API_URl = 'https://45f0a3a14b0030e3.mokky.dev/Items'

const Main = () => {
  console.log("Main update...")
  const [paginIndex, setPaginIndex] = React.useState(1)
  const [filter, setFilter] = React.useState(0)
  const [category, setCategory] = React.useState(0)
  const addFilter = filter? 'category=' + filter : '';
  const addSort = category? 'sortBy=' + categories[category].tech : ''
  let addUrl = `${API_URl}?${addFilter}&${addSort}`;
  return (
    <>
        <pageContext.Provider value={{paginIndex, setPaginIndex}}>
          <Filters filter={filter} setFilter={setFilter} category={category} setCategory={setCategory}/>
          <Goods filter={filter} API_URl={addUrl}/>
        </pageContext.Provider>
    </>
  )
}

export default Main
