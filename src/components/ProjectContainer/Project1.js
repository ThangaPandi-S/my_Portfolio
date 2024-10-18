import React, { useState } from 'react'
import './Project1.css'

export const Project1 = ({img,title,desc,link}) => {
    const [show,setShow] = useState(false);
  return (
   <a href={link} className='projectBox'>
    <div className='project' onMouseEnter={()=>setShow(true)} onMouseLeave={()=> setShow(false)}>
        {
        show? (<div className='project__content'>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>)
        :(<img src={img} alt={title}/>)
        }

    </div>
   </a>
  )
}
