import React from 'react'

import { setPaginIndex } from '../redux/slices/paginationSlice'
import { useDispatch, useSelector } from 'react-redux'

const Pagination = ({ count = 3, swap }) => {
  // console.log('Pagination update...')
  const paginIndex = useSelector((state) => state.pagination.paginIndex)
  const dispatch = useDispatch()
  return (
    <ul className='pagination'>
      <li onClick={() => swap(paginIndex-1)}>{'<'}</li>
      {count &&
        Array.from({ length: count }).map((_, index) => {
          return (
            <li
              onClick={() => dispatch(setPaginIndex(index + 1))}
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
