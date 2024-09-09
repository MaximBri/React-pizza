import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addGood } from '../redux/slices/basketSlice'
const Good = ({
  data: { id, title, price, imageUrl, types, sizes, category, rating },
}) => {
  // React.useEffect(() => {
  //   console.log("Good update...")
  // })
  const dispatch = useDispatch()
  const pizzasData = useSelector((state) => state.basket.items);
  const heights = ['тонкое', 'традиционное']
  const [count, setCount] = useState(pizzasData.filter((item) => item.id === id).length);
  const [size, setSize] = useState(0);
  const [type, setType] = useState(0);
  const addPizza = () => {
    console.log("send")
    dispatch(addGood({id, price, title, type, size}))
    setCount(count + 1)
  }
  return (
    <div className='pizza-block'>
      <h4 className='pizza-block__title'>{title}</h4>
      <div className='pizza-block__selector'>
        <ul>
          {types.map((item, index) => {
            return index === type ? (
              <li className='active' key={index}>
                {heights[index]}
              </li>
            ) : (
              <li onClick={() => setType(index)} key={index}>{heights[index]}</li>
            )
          })}
        </ul>
        <ul>
          {sizes.map((item, index) => {
            return index === size ? (
              <li className='active' key={index}>
                {item} см.
              </li>
            ) : (
              <li onClick={() => setSize(index)} key={index}>{item} см.</li>
            )
          })}
        </ul>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>от {price} p</div>
        <div
          onClick={() => addPizza()}
          className='button button--outline button--add'
        >
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Добавить</span>
          <i>{count}</i>
        </div>
      </div>
    </div>
  )
}

export default Good
