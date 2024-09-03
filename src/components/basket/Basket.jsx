import React from 'react'
import BasketNav from './BasketNav'
import BasketItem from './BasketItem'
import BasketButtons from './BasketButtons'
import BasketInfo from './BasketInfo'

const Basket = () => {
  return (
    <div className='container--cart'>
      <div className='cart'>
        <BasketNav />
        <div className='content__items'>
          <BasketItem/>
          <BasketItem/>
          <BasketItem/>
          <BasketItem/>
        </div>
        <div className='cart__bottom'>
          <BasketInfo />
          <BasketButtons/>
        </div>
      </div>
    </div>
  )
}

export default Basket
