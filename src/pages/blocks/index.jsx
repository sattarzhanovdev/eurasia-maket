import React from 'react'
import c from './blocks.module.scss'
import block1 from '../../assets/10 (2).svg'
import block2 from '../../assets/50.svg'
import { useNavigate } from 'react-router-dom'
import { API } from '../../api'

const Blocks = () => {
  const Navigate = useNavigate()
  return (
    <div className={c.blocks}>
      <img 
        src={block2} alt="" 
        onClick={() => {
          API.putValue('>')
          localStorage.setItem('block', 2)
          Navigate('/entrance/')
        }}
      />
      <img 
        src={block1} alt="" 
        onClick={() => {
          API.putValue('<')
          localStorage.setItem('block', 1)
          Navigate('/entrance/')
        }}
      />
    </div>
  )
}

export default Blocks