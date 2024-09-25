import React from 'react'
import { useSelector } from 'react-redux'

import BasketEmpty from '../components/basket/BasketEmpty'
import Basket from '../components/basket/Basket'

const BascetPage = () => {
  const data = useSelector<any, []>((state) => state.basket.items)
  return (
    data.length ? <Basket />: <BasketEmpty />
  )
}

export default BascetPage
