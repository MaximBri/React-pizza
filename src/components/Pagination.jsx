import React from 'react'
import pageContext from '../contexts/pageContext'

const Pagination = ({ count = 3, swap }) => {
  const {paginIndex, setPaginIndex} = React.useContext(pageContext)
  return (
    <ul className='pagination'>
      <li onClick={() => swap(paginIndex-1)}>{'<'}</li>
      {count &&
        Array.from({ length: count }).map((_, index) => {
          return (
            <li
              onClick={() => setPaginIndex(index + 1)}
              className={index === paginIndex - 1 ? 'selected' : ''}
              key={index}
            >
              {index + 1}
            </li>
          )
        })}
      <li onClick={() => swap(paginIndex + 1)}>{'>'}</li>
    </ul>
  )
}

export default Pagination
