import React from 'react'
import { useSelector } from 'react-redux'

interface Basket{
  count:number;
  totalPrice: number;
}

const BasketInfo: React.FC = () => {
  const BasketInfo = useSelector<any, Basket>((state) => state.basket)
  return (
    <div className='cart__bottom-details'>
      <span>
        Всего пицц: <b>{BasketInfo.count} шт.</b>
      </span>
      <span>
        Сумма заказа: <b>{BasketInfo.totalPrice} ₽</b>
      </span>
    </div>
  )
}

export default BasketInfo
