import React from 'react'

const Search = ({text, setText}) => {
  return (
    <div className='content__box_item'>
      Поиск
      <input onChange={(e) => setText(e.target.value)} type='text' value={text} />
    </div>
  )
}

export default Search
