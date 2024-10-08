import React from 'react'
import { Link } from 'react-router-dom'

const BasketButtons: React.FC = () => {
  return (
    <div className='cart__bottom-buttons'>
      <Link
        to='/React-pizza'
        className='button button--outline button--add go-back-btn'
      >
        <svg
          width='8'
          height='14'
          viewBox='0 0 8 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7 13L1 6.93015L6.86175 1'
            stroke='#D3D3D3'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <span>Вернуться назад</span>
      </Link>
      <Link to='/React-pizza' className='button pay-btn'>
        <span>Оплатить сейчас</span>
      </Link>
    </div>
  )
}

export default BasketButtons
