import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setFilters, setCategory } from '../redux/slices/filtersSlice'
import { setPaginIndex } from '../redux/slices/paginationSlice'
import filters from '../data/filters'
import categories from '../data/categories'

const Filters: React.FC = () => {
  console.log('Filters update...')
  const dispatch = useDispatch()
  const filter = useSelector<any, number>((state) => state.filters.categoryId)
  const category = useSelector<any, number>((state) => state.filters.sort.id)
  const [open, setOpen] = React.useState<Boolean>(false)
  const sortRef = React.useRef<HTMLDivElement>(null)
  const changeCateg = (categ: number) => {
    setOpen(!open)
    dispatch(setCategory(categ))
  }
  const changeFilter = (index: number) => {
    dispatch(setFilters(index))
    dispatch(setPaginIndex(1))
  }
  const sortClickEventer = (event:MouseEvent) => {
    if(sortRef.current) if (!event.composedPath().includes(sortRef.current)) setOpen(false)
  }
  React.useEffect(() => {
    document.body.addEventListener('click', (event) => sortClickEventer(event))
    return () => document.body.removeEventListener('click', sortClickEventer)
  }, [])
  return (
    <div className='content__top'>
      <div className='categories'>
        <ul>
          {filters.map((item, index) => {
            return (
              <li
                onClick={() => changeFilter(index)}
                className={filter === index ? 'active' : ''}
                key={index}
              >
                {item.name}
              </li>
            )
          })}
        </ul>
      </div>
      <div ref={sortRef} className='sort'>
        <div className='sort__label'>
          <svg
            width='10'
            height='6'
            viewBox='0 0 10 6'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
              fill='#2C2C2C'
            />
          </svg>
          <b>Сортировка по:</b>
          <span onClick={() => setOpen(!open)}>
            {categories[category].title}
          </span>
        </div>
        {open && (
          <div className='sort__popup'>
            <ul>
              {categories.map((categ, index) => {
                return (
                  <li
                    onClick={() => changeCateg(index)}
                    key={index}
                    className={index === category ? 'active' : ''}
                  >
                    {categ.title}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Filters
