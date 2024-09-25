import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import MainPage from './pages/MainPage'
import BasketPage from './pages/BascetPage'
import NotFoundPage from './pages/NotFoundPage'
import MainLayout from './layouts/MainLayout'

function App() {
  console.log('App update...')
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='App'>
          <Routes>
            <Route path='/React-pizza' element={<MainLayout/>}>
              <Route path='' element={<MainPage />}></Route>
              <Route path='React-pizza/basket' element={<BasketPage />}></Route>
              <Route path='*' element={<NotFoundPage />}></Route>
            </Route>
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
