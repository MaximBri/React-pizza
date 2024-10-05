import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import MainPage from './pages/MainPage'
import MainLayout from './layouts/MainLayout'

const BasketPage = React.lazy(() => import('./pages/BascetPage'))
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'))

function App() {
  console.log('App update...')
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='App'>
          <Routes>
            <Route path='/React-pizza' element={<MainLayout />}>
              <Route path='' element={<MainPage />}></Route>
              <Route
                path='React-pizza/basket'
                element={
                  <React.Suspense fallback={<div>Загрузка...</div>}>
                    <BasketPage />
                  </React.Suspense>
                }
              ></Route>
              <Route
                path='*'
                element={
                  <React.Suspense fallback={<div>Загрузка...</div>}>
                    <NotFoundPage />
                  </React.Suspense>
                }
              ></Route>
            </Route>
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
