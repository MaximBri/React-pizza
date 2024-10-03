import React from 'react'
import { useDispatch } from 'react-redux'

import {
  addGood,
  deleteGood,
  deleteGoods,
} from '../../redux/slices/basket/slice'

interface Data {
  data: {
    id: number
    price: number
    title: string
    type: number
    size: number
    count: number
    sizes: number[]
    imageUrl: string,
    types: number[],
  }
}

const BasketItem: React.FC<Data> = ({ data }) => {
  const dispatch = useDispatch()
  const heights = ['тонкое', 'традиционное']
  const addPizza = () => {
    dispatch(
      addGood({
        id: data.id,
        price: data.price,
        title: data.title,
        type: data.type,
        size: data.size,
        sizes: data.sizes,
      })
    )
  }
  const deletePizza = () => {
    dispatch(deleteGood({ id: data.id, size: data.size, type: data.type }))
  }
  const deletePizzas = () => {
    dispatch(deleteGoods({ id: data.id, size: data.size, type: data.type }))
  }
  return (
    <div className='cart__item'>
      <div className='cart__item_top'>
        <div className='cart__item-img'>
          <img
            className='pizza-block__image'
            src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
            alt='Pizza'
          />
        </div>
        <div className='cart__item-info'>
          <h3>{data.title}</h3>
          <p>
            {heights[data.type]}, {data.sizes[data.size]} см.
          </p>
        </div>
      </div>
      <div className='cart__item_top_btm'>
        <div className='cart__item-count'>
          <div
            onClick={() => deletePizza()}
            className='button button--outline button--circle cart__item-count-minus'
          >
            <svg
              width='10'
              height='10'
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z'
                fill='#EB5A1E'
              />
              <path
                d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z'
                fill='#EB5A1E'
              />
            </svg>
          </div>
          <b>{data.count}</b>
          <div
            onClick={() => addPizza()}
            className='button button--outline button--circle cart__item-count-plus'
          >
            <svg
              width='10'
              height='10'
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z'
                fill='#EB5A1E'
              />
              <path
                d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z'
                fill='#EB5A1E'
              />
            </svg>
          </div>
        </div>
        <div className='cart__item-price'>
          <b>{data.price * data.count} ₽</b>
        </div>
        <div className='cart__item-remove'>
          <div
            onClick={() => deletePizzas()}
            className='button button-delete button--circle'
          >
            <svg
              width='10'
              height='10'
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z'
                fill='#EB5A1E'
              />
              <path
                d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z'
                fill='#EB5A1E'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasketItem
