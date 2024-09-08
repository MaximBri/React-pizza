import React from 'react'

const Search = ({ text, setText, ref }) => {
  return (
    <div className='content__box_item'>
      Поиск
      <input
        // ref={ref}
        onChange={(e) => setText(e.target.value)}
        type='text'
        value={text}
      />
    </div>
  )
}

export default Search
