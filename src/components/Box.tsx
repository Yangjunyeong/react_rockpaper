import React from 'react'
import { SelectInfo } from '../model/rock'

interface OwnProps {
  title:string,
  item: SelectInfo | null,
  result: string | null,

}

const Box:React.FC<OwnProps> = ( {title, item, result} ) => {
  return (  
    <div className={`box ${result}`}>
      <div className='title'>
        {title}
      </div>
      <div className='resultImg'>
        {item && <img  src={item.img} alt={item.name} />}
      </div>
      <div className='result'>
        {result}
      </div>
    </div>
  )
}

export default Box