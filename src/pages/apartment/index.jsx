import React from 'react'
import c from './apartment.module.scss'
import first111 from '../../assets/1 (2).svg'
import first112 from '../../assets/2 (2).svg'
import first113 from '../../assets/3 (2).svg'
import first114 from '../../assets/4 (2).svg'
import first121 from '../../assets/21.svg'
import first122 from '../../assets/22.svg'
import first123 from '../../assets/23.svg'
import first124 from '../../assets/24.svg'
import first131 from '../../assets/31.svg'
import first132 from '../../assets/32.svg'
import first133 from '../../assets/33.svg'
import first134 from '../../assets/34.svg'
import first211 from '../../assets/41.svg'
import first212 from '../../assets/42.svg'
import first213 from '../../assets/43.svg'
import first214 from '../../assets/44.svg'
import first221 from '../../assets/51.svg'
import first222 from '../../assets/52.svg'
import first223 from '../../assets/53.svg'
import first224 from '../../assets/54.svg'

const Apartment = () => {
  const image = [
    {block: 1, entrance: 1, apartment: 1, image: first111},
    {block: 1, entrance: 1, apartment: 2, image: first112},
    {block: 1, entrance: 1, apartment: 3, image: first113},
    {block: 1, entrance: 1, apartment: 4, image: first114},
    {block: 1, entrance: 2, apartment: 1, image: first121},
    {block: 1, entrance: 2, apartment: 2, image: first122},
    {block: 1, entrance: 2, apartment: 3, image: first123},
    {block: 1, entrance: 2, apartment: 4, image: first124},
    {block: 1, entrance: 3, apartment: 1, image: first131},
    {block: 1, entrance: 3, apartment: 2, image: first132},
    {block: 1, entrance: 3, apartment: 3, image: first133},
    {block: 1, entrance: 3, apartment: 4, image: first134},
    {block: 2, entrance: 1, apartment: 1, image: first211},
    {block: 2, entrance: 1, apartment: 2, image: first212},
    {block: 2, entrance: 1, apartment: 3, image: first213},
    {block: 2, entrance: 1, apartment: 4, image: first214},
    {block: 2, entrance: 2, apartment: 1, image: first221},
    {block: 2, entrance: 2, apartment: 2, image: first222},
    {block: 2, entrance: 2, apartment: 3, image: first223},
    {block: 2, entrance: 2, apartment: 4, image: first224},
  ]
  

  const block = Number(localStorage.getItem('block'))
  const entrance = Number(localStorage.getItem('entrance'))
  const apartment = Number(localStorage.getItem('apartment'))
  
  return (
    <div className={c.apartment}>
      <img src={image.find(item => item.entrance === entrance && item.apartment === apartment && item.block === block).image} alt="" />
    </div>
  )
}

export default Apartment