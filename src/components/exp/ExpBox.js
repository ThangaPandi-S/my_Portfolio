import React from 'react'
import './ExpBox.css'

export const ExpBox = ({number,title,style}) => {
  return (
    <div style ={{...style}} className='experBox'>
        <h1>{number}</h1>
        <p>{title}</p>
    </div>
  )
}
