import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main'
import axios from 'axios'
import Blocks from './pages/blocks'
import Entrance from './pages/entrance'
import Floors from './pages/floors'
import Apartments from './pages/apartments'
import Apartment from './pages/apartment'

axios.defaults.baseURL = 'https://nurkeldi-maket-default-rtdb.asia-southeast1.firebasedatabase.app'

function App() {
  return (
    <div>
      <Routes>
        <Route 
          path='/'
          element={<Main />}
        />
        <Route 
          path='/blocks/'
          element={<Blocks />}
        />
        <Route 
          path='/entrance/'
          element={<Entrance />}
        />
        <Route 
          path='/floors/'
          element={<Floors />}
        />
        <Route 
          path='/apartments/'
          element={<Apartments />}
        />
        <Route 
          path='/apartment/'
          element={<Apartment />}
        />
      </Routes>
    </div>
  )
}

export default App