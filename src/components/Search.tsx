import React from 'react'
type SearchProps = {
  text: string,
  setText: (str: string) => void,
}
const Search:React.FC<SearchProps> = ({ text, setText}) => {
  return (
    <div className='content__box_item'>
      Поиск
      <input
        onChange={(e) => setText(e.target.value)}
        type='text'
        value={text}
      />
    </div>
  )
}

export default Search
