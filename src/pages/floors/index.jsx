import React from 'react'
import c from './floors.module.scss'
import { API } from '../../api'
import block1 from '../../assets/10 (2).svg'
import block2 from '../../assets/50.svg'
import { useNavigate } from 'react-router-dom'

const Floors = () => {
  const floorsData = [
    {id: 1, value: 'a'},
    {id: 2, value: 'b'},
    {id: 3, value: 'c'},
    {id: 4, value: 'd'},
    {id: 5, value: 'e'},
    {id: 6, value: 'f'},
    {id: 7, value: 'g'},
    {id: 8, value: 'h'},
    {id: 9, value: 'i'},
    {id: 10, value: 'j'},
  ]

  const block = Number(localStorage.getItem('block'))
  const Navigate = useNavigate()
  
  return (
    <div className={c.floors}>
      <div>
        <h2>Выберите этаж:</h2>
        <div>
          {
            floorsData.map(item => (
              <button onClick={() => {
                API.putValue(item.value)
                Navigate('/apartments/')
              }}>
                {item.id}
              </button>
            ))
          }
        </div>
      </div>
      <img src={block === 1 ? block1 : block2} alt="" className={block === 2 ? '' : c.block }/>
    </div>
  )
}

export default Floors