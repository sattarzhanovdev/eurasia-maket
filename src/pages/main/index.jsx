import React from 'react'
import c from './main.module.scss'
import image from '../../assets/photo.jpg'
import logo from '../../assets/logo.svg'
import { API } from '../../api'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const Navigate = useNavigate()

  return (
    <div className={c.main}>
      <div>
        <div>
          <img src={logo} alt="" />
          <h1>ЖК "Эверест"</h1>
        </div>

        <button 
          onClick={() => {
            API.putValue('v')
            Navigate('/blocks/')
          }}
        >
          Включить дом
        </button>
        <button 
          onClick={() => {
            API.putValue('_')
          }}
        >
          Выключить дом
        </button>
        <button 
          onClick={() => {
            API.putValue('D')
          }}
        >
          Включить демо режим
        </button>
      </div>
      
      <img src={image} alt="" />
    </div>
  )
}

export default Main