import React from 'react'
import { useSelector } from 'react-redux'

import {BasketNav, BasketItem, BasketButtons, BasketInfo} from '../'

const Basket: React.FC = () => {
  const pizzasData = useSelector<any, []>((state) => state.basket.items)
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
