import React from 'react'
import c from './apartments.module.scss'
import { API } from '../../api'
import block1 from '../../assets/10 (2).svg'
import block2 from '../../assets/50.svg'
import { useNavigate } from 'react-router-dom'

const Apartments = () => {
  const block = Number(localStorage.getItem('block'))

  const apartmentsData = [
    {id: 1, value: '11'},
    {id: 2, value: '12'},
    {id: 3, value: '13'},
    {id: 4, value: '14'},
  ]

  const Navigate = useNavigate()

  return (
    <div className={c.apartments}>
      <div>
        <h2>Выберите квартиру:</h2>
        <div>
          {
            apartmentsData.map(item => (
              <button
                onClick={() => {
                  API.putValue(item.value)
                  localStorage.setItem('apartment', item.id)
                  Navigate('/apartment/')
                }}
              >
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

export default Apartments