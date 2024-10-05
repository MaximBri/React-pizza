import React from 'react'
import { useSelector } from 'react-redux'

import {Basket, BasketEmpty} from '../components'

const BascetPage: React.FC = () => {
  const data = useSelector<any, []>((state) => state.basket.items)
  return (
    data.length ? <Basket />: <BasketEmpty />
  )
}

export default BascetPage
