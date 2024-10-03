import React from 'react'

import { selectPaginIndex, setPaginIndex } from '../redux/slices/pagination/slice'
import { useDispatch, useSelector } from 'react-redux'

type PaginationProps = {
  count: number,
  swap: (int: number) => void; 
}
const Pagination: React.FC<PaginationProps> = ({ count = 3, swap }) => {
  // console.log('Pagination update...')
  const paginIndex = useSelector<any, number>(selectPaginIndex)
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
