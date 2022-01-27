import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import Crypto from './components/Crypto'
import News from './components/News'
import Index from './components/Index'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  const options = ['Bitcoin', 'Ethereum', 'Binance Coin', 'Tether', 'Solana', 'Cardano', 'Ripple', 'Terra', 'Polkadot', 'Dogecoin', 'Polygon', 'Binance-USD', 'Shiba Inu', 'TerraUSD'];
  return (  
    <Router>
      <div className='main-container'>
        <div><NavBar className='navbar'/></div>
        <Crypto coinName = 'Ethereum'/>
        <div>
          <Routes>
            {/* <Route path='/' element={<Index/>} /> */}
            <Route path='/crypto' element={<MainPage/>}/>
            <Route path='/news' element={<News category='cryptocurrency' pageSize={12}/>}/>
          </Routes>
        </div>
      </div>
    </Router>   
  )
}

export default App
