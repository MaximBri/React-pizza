import React from 'react'

import { Header } from '../components'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MainLayout: React.FC = React.memo(() => {
  console.log('MainLayput update...')
  const data = useSelector<any, []>((state) => state.basket.items)
  const first = React.useRef(false);
  React.useEffect(() => {
    if(first.current) {
      console.log("Pizzas LC update")
      localStorage.setItem('Pizzas', JSON.stringify(data))
    }
    first.current = true
  }, [data])
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <Outlet />
        </div>
      </div>
    </div>
  )
})

export default MainLayout
