import React from 'react'
import c from './entrance.module.scss'
import block1 from '../../assets/10 (2).svg'
import block2 from '../../assets/50.svg'
import { API } from '../../api'
import { useNavigate } from 'react-router-dom'

const Entrance = () => {
  const block = Number(localStorage.getItem('block'))
  const Navigate = useNavigate()
  
  return (
    <div className={c.entrance}>
      <div>
        <div></div>
        <h2>Выберите подъезд:</h2>
        
        {
          block == 1?
          <div>
            <button onClick={() => {
              API.putValue('q')
              Navigate('/floors/')
              localStorage.setItem('entrance', 1)
            }}
          >1</button>
            <button onClick={() => {
              API.putValue('w')
              Navigate('/floors/')
              localStorage.setItem('entrance', 2)
            }}>2</button>
            <button onClick={() => {
              API.putValue('r')
              Navigate('/floors/')
              localStorage.setItem('entrance', 3)
            }}>3</button>
          </div> :
          <div>
            <button onClick={() => {
              API.putValue('q')
              Navigate('/floors/')
              localStorage.setItem('entrance', 1)
            }}>1</button>
            <button onClick={() => {
              API.putValue('w')
              Navigate('/floors/')
              localStorage.setItem('entrance', 2)
            }}>2</button>
          </div> 
        }
      </div>

      <img src={block === 1 ? block1 : block2} alt="" className={block === 2 ? '' : c.block }/>
    </div>
  )
}

export default Entrance