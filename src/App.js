import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import MainPage from './pages/MainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import BasketPage from './pages/BascetPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  console.log('App update...')
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className='App'>
          <div className='wrapper'>
            <Header />
            <div className='content'>
              <div className='container'>
                <Routes>
                  <Route path='/' element={<MainPage />}></Route>
                  <Route path='/basket' element={<BasketPage />}></Route>
                  <Route path='*' element={<NotFoundPage />}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
