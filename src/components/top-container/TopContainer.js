import React from 'react'
import { Element } from 'react-scroll'
import './TopContainer.css';
import { TopContent } from './TopContent';
export const TopContainer = () => {
  return (
    <Element name='about' className='topContainer'>
        <TopContent/>
    </Element>
  )
}
