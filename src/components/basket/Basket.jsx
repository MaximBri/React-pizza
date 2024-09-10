import React from 'react'
import { useSelector } from 'react-redux'

import BasketNav from './BasketNav'
import BasketItem from './BasketItem'
import BasketButtons from './BasketButtons'
import BasketInfo from './BasketInfo'

const Basket = () => {
  const pizzasData = useSelector((state) => state.basket.items)
  return (
    <div className='container--cart'>
      <div className='cart'>
        <BasketNav />
        <div className='content__items'>
          {pizzasData.map((item, index) => {
            return <BasketItem data={item} key={index}/>
          })}
        </div>
        <div className='cart__bottom'>
          <BasketInfo />
          <BasketButtons />
        </div>
      </div>
    </div>
  )
}

export default Basket
